/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-prototype-builtins */

// To parse this data:
//
//   import { Convert, Release } from "./file";
//
//   const release = Convert.toRelease(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Release {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: Author
  node_id: string
  tag_name: string
  target_commitish: string
  name: string
  draft: boolean
  prerelease: boolean
  created_at: Date
  published_at: Date
  assets: Asset[]
  tarball_url: string
  zipball_url: string
  body: string
  reactions: Reactions
  mentions_count: number
}

export interface Asset {
  url: string
  id: number
  node_id: string
  name: string
  label: null
  uploader: Author
  content_type: string
  state: string
  size: number
  download_count: number
  created_at: Date
  updated_at: Date
  browser_download_url: string
}

export interface Author {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Reactions {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toRelease(json: string): Release {
    return cast(JSON.parse(json), r('Release'))
  }

  public static releaseToJson(value: Release): string {
    return JSON.stringify(uncast(value, r('Release')), null, 2)
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key)
    throw new Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`)

  throw new Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`)
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ })
    typ.jsonToJS = map
  }
  return typ.jsonToJS
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ })
    typ.jsToJSON = map
  }
  return typ.jsToJSON
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val)
      return val
    return invalidValue(typ, val, key)
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length
    for (let i = 0; i < l; i++) {
      const typ = typs[i]
      try {
        return transform(val, typ, getProps)
      }
      catch (_) {}
    }
    return invalidValue(typs, val)
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.includes(val))
      return val
    return invalidValue(cases, val)
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val))
      return invalidValue('array', val)
    return val.map(el => transform(el, typ, getProps))
  }

  function transformDate(val: any): any {
    if (val === null)
      return null

    const d = new Date(val)
    if (isNaN(d.valueOf()))
      return invalidValue('Date', val)

    return d
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val))
      return invalidValue('object', val)

    const result: any = {}
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key]
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined
      result[prop.key] = transform(v, prop.typ, getProps, prop.key)
    })
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key))
        result[key] = transform(val[key], additional, getProps, key)
    })
    return result
  }

  if (typ === 'any')
    return val
  if (typ === null) {
    if (val === null)
      return val
    return invalidValue(typ, val)
  }
  if (typ === false)
    return invalidValue(typ, val)
  while (typeof typ === 'object' && typ.ref !== undefined)
    typ = typeMap[typ.ref]

  if (Array.isArray(typ))
    return transformEnum(typ, val)
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty('props')
          ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val)
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number')
    return transformDate(val)
  return transformPrimitive(typ, val)
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps)
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps)
}

function a(typ: any) {
  return { arrayItems: typ }
}

function u(...typs: any[]) {
  return { unionMembers: typs }
}

function o(props: any[], additional: any) {
  return { props, additional }
}

function m(additional: any) {
  return { props: [], additional }
}

function r(name: string) {
  return { ref: name }
}

const typeMap: any = {
  Release: o([
    { json: 'url', js: 'url', typ: '' },
    { json: 'assets_url', js: 'assets_url', typ: '' },
    { json: 'upload_url', js: 'upload_url', typ: '' },
    { json: 'html_url', js: 'html_url', typ: '' },
    { json: 'id', js: 'id', typ: 0 },
    { json: 'author', js: 'author', typ: r('Author') },
    { json: 'node_id', js: 'node_id', typ: '' },
    { json: 'tag_name', js: 'tag_name', typ: '' },
    { json: 'target_commitish', js: 'target_commitish', typ: '' },
    { json: 'name', js: 'name', typ: '' },
    { json: 'draft', js: 'draft', typ: true },
    { json: 'prerelease', js: 'prerelease', typ: true },
    { json: 'created_at', js: 'created_at', typ: Date },
    { json: 'published_at', js: 'published_at', typ: Date },
    { json: 'assets', js: 'assets', typ: a(r('Asset')) },
    { json: 'tarball_url', js: 'tarball_url', typ: '' },
    { json: 'zipball_url', js: 'zipball_url', typ: '' },
    { json: 'body', js: 'body', typ: '' },
    { json: 'reactions', js: 'reactions', typ: r('Reactions') },
    { json: 'mentions_count', js: 'mentions_count', typ: 0 },
  ], false),
  Asset: o([
    { json: 'url', js: 'url', typ: '' },
    { json: 'id', js: 'id', typ: 0 },
    { json: 'node_id', js: 'node_id', typ: '' },
    { json: 'name', js: 'name', typ: '' },
    { json: 'label', js: 'label', typ: null },
    { json: 'uploader', js: 'uploader', typ: r('Author') },
    { json: 'content_type', js: 'content_type', typ: '' },
    { json: 'state', js: 'state', typ: '' },
    { json: 'size', js: 'size', typ: 0 },
    { json: 'download_count', js: 'download_count', typ: 0 },
    { json: 'created_at', js: 'created_at', typ: Date },
    { json: 'updated_at', js: 'updated_at', typ: Date },
    { json: 'browser_download_url', js: 'browser_download_url', typ: '' },
  ], false),
  Author: o([
    { json: 'login', js: 'login', typ: '' },
    { json: 'id', js: 'id', typ: 0 },
    { json: 'node_id', js: 'node_id', typ: '' },
    { json: 'avatar_url', js: 'avatar_url', typ: '' },
    { json: 'gravatar_id', js: 'gravatar_id', typ: '' },
    { json: 'url', js: 'url', typ: '' },
    { json: 'html_url', js: 'html_url', typ: '' },
    { json: 'followers_url', js: 'followers_url', typ: '' },
    { json: 'following_url', js: 'following_url', typ: '' },
    { json: 'gists_url', js: 'gists_url', typ: '' },
    { json: 'starred_url', js: 'starred_url', typ: '' },
    { json: 'subscriptions_url', js: 'subscriptions_url', typ: '' },
    { json: 'organizations_url', js: 'organizations_url', typ: '' },
    { json: 'repos_url', js: 'repos_url', typ: '' },
    { json: 'events_url', js: 'events_url', typ: '' },
    { json: 'received_events_url', js: 'received_events_url', typ: '' },
    { json: 'type', js: 'type', typ: '' },
    { json: 'site_admin', js: 'site_admin', typ: true },
  ], false),
  Reactions: o([
    { json: 'url', js: 'url', typ: '' },
    { json: 'total_count', js: 'total_count', typ: 0 },
    { json: '+1', js: '+1', typ: 0 },
    { json: '-1', js: '-1', typ: 0 },
    { json: 'laugh', js: 'laugh', typ: 0 },
    { json: 'hooray', js: 'hooray', typ: 0 },
    { json: 'confused', js: 'confused', typ: 0 },
    { json: 'heart', js: 'heart', typ: 0 },
    { json: 'rocket', js: 'rocket', typ: 0 },
    { json: 'eyes', js: 'eyes', typ: 0 },
  ], false),
}
