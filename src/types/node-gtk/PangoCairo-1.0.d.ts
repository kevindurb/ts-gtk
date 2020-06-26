/**
 * PangoCairo-1.0
 */

/// <reference types="node" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace PangoCairo {

export function contextGetFontOptions(context: Pango.Context): cairo.FontOptions | null
export function contextGetResolution(context: Pango.Context): number
export function contextSetFontOptions(context: Pango.Context, options?: cairo.FontOptions | null): void
export function contextSetResolution(context: Pango.Context, dpi: number): void
export function contextSetShapeRenderer(context: Pango.Context, func: ShapeRendererFunc | null): void
export function createContext(cr: cairo.Context): Pango.Context
export function createLayout(cr: cairo.Context): Pango.Layout
export function errorUnderlinePath(cr: cairo.Context, x: number, y: number, width: number, height: number): void
export function fontMapGetDefault(): Pango.FontMap
export function fontMapNew(): Pango.FontMap
export function fontMapNewForFontType(fonttype: cairo.FontType): Pango.FontMap | null
export function glyphStringPath(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void
export function layoutLinePath(cr: cairo.Context, line: Pango.LayoutLine): void
export function layoutPath(cr: cairo.Context, layout: Pango.Layout): void
export function showErrorUnderline(cr: cairo.Context, x: number, y: number, width: number, height: number): void
export function showGlyphItem(cr: cairo.Context, text: string, glyphItem: Pango.GlyphItem): void
export function showGlyphString(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void
export function showLayout(cr: cairo.Context, layout: Pango.Layout): void
export function showLayoutLine(cr: cairo.Context, line: Pango.LayoutLine): void
export function updateContext(cr: cairo.Context, context: Pango.Context): void
export function updateLayout(cr: cairo.Context, layout: Pango.Layout): void
export interface ShapeRendererFunc {
    (cr: cairo.Context, attr: Pango.AttrShape, doPath: boolean, data?: object | null): void
}
export class Font {
    /* Methods of PangoCairo.Font */
    getScaledFont(): cairo.ScaledFont | null
    static name: string
}
export class FontMap {
    /* Methods of PangoCairo.FontMap */
    getFontType(): cairo.FontType
    getResolution(): number
    setDefault(): void
    setResolution(dpi: number): void
    static name: string
    static getDefault(): Pango.FontMap
    static newForFontType(fonttype: cairo.FontType): Pango.FontMap | null
}
}