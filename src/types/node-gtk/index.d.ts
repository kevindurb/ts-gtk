/* eslint-disable @typescript-eslint/triple-slash-reference */
        /// <reference path="Atk-1.0.d.ts" />
            /// <reference path="Atspi-2.0.d.ts" />
            /// <reference path="DBus-1.0.d.ts" />
            /// <reference path="DBusGLib-1.0.d.ts" />
            /// <reference path="GCalc-2.d.ts" />
            /// <reference path="GCi-1.d.ts" />
            /// <reference path="GIRepository-2.0.d.ts" />
            /// <reference path="GL-1.0.d.ts" />
            /// <reference path="GLib-2.0.d.ts" />
            /// <reference path="GModule-2.0.d.ts" />
            /// <reference path="GObject-2.0.d.ts" />
            /// <reference path="Gdk-3.0.d.ts" />
            /// <reference path="GdkPixbuf-2.0.d.ts" />
            /// <reference path="GdkPixdata-2.0.d.ts" />
            /// <reference path="GdkX11-3.0.d.ts" />
            /// <reference path="Gio-2.0.d.ts" />
            /// <reference path="Gtk-3.0.d.ts" />
            /// <reference path="HarfBuzz-0.0.d.ts" />
            /// <reference path="Pango-1.0.d.ts" />
            /// <reference path="PangoCairo-1.0.d.ts" />
            /// <reference path="PangoFT2-1.0.d.ts" />
            /// <reference path="PangoFc-1.0.d.ts" />
            /// <reference path="PangoOT-1.0.d.ts" />
            /// <reference path="PangoXft-1.0.d.ts" />
            /// <reference path="Vulkan-1.0.d.ts" />
            /// <reference path="cairo-1.0.d.ts" />
            /// <reference path="fontconfig-2.0.d.ts" />
            /// <reference path="freetype2-2.0.d.ts" />
            /// <reference path="libxml2-2.0.d.ts" />
            /// <reference path="win32-1.0.d.ts" />
            /// <reference path="xfixes-4.0.d.ts" />
            /// <reference path="xft-2.0.d.ts" />
            /// <reference path="xlib-2.0.d.ts" />
            /// <reference path="xrandr-1.3.d.ts" />
    
declare module 'node-gtk' {
    export function require(ns: string, ver?: string): any;
            export function require(ns: 'Atk'): typeof Atk;
        export function require(ns: 'Atk', ver?: '1.0'): typeof Atk;
            export function require(ns: 'Atspi'): typeof Atspi;
        export function require(ns: 'Atspi', ver?: '2.0'): typeof Atspi;
            export function require(ns: 'DBus'): typeof DBus;
        export function require(ns: 'DBus', ver?: '1.0'): typeof DBus;
            export function require(ns: 'DBusGLib'): typeof DBusGLib;
        export function require(ns: 'DBusGLib', ver?: '1.0'): typeof DBusGLib;
            export function require(ns: 'GCalc'): typeof GCalc;
        export function require(ns: 'GCalc', ver?: '2'): typeof GCalc;
            export function require(ns: 'GCi'): typeof GCi;
        export function require(ns: 'GCi', ver?: '1'): typeof GCi;
            export function require(ns: 'GIRepository'): typeof GIRepository;
        export function require(ns: 'GIRepository', ver?: '2.0'): typeof GIRepository;
            export function require(ns: 'GL'): typeof GL;
        export function require(ns: 'GL', ver?: '1.0'): typeof GL;
            export function require(ns: 'GLib'): typeof GLib;
        export function require(ns: 'GLib', ver?: '2.0'): typeof GLib;
            export function require(ns: 'GModule'): typeof GModule;
        export function require(ns: 'GModule', ver?: '2.0'): typeof GModule;
            export function require(ns: 'GObject'): typeof GObject;
        export function require(ns: 'GObject', ver?: '2.0'): typeof GObject;
            export function require(ns: 'Gdk'): typeof Gdk;
        export function require(ns: 'Gdk', ver?: '3.0'): typeof Gdk;
            export function require(ns: 'GdkPixbuf'): typeof GdkPixbuf;
        export function require(ns: 'GdkPixbuf', ver?: '2.0'): typeof GdkPixbuf;
            export function require(ns: 'GdkPixdata'): typeof GdkPixdata;
        export function require(ns: 'GdkPixdata', ver?: '2.0'): typeof GdkPixdata;
            export function require(ns: 'GdkX11'): typeof GdkX11;
        export function require(ns: 'GdkX11', ver?: '3.0'): typeof GdkX11;
            export function require(ns: 'Gio'): typeof Gio;
        export function require(ns: 'Gio', ver?: '2.0'): typeof Gio;
            export function require(ns: 'Gtk'): typeof Gtk;
        export function require(ns: 'Gtk', ver?: '3.0'): typeof Gtk;
            export function require(ns: 'HarfBuzz'): typeof HarfBuzz;
        export function require(ns: 'HarfBuzz', ver?: '0.0'): typeof HarfBuzz;
            export function require(ns: 'Pango'): typeof Pango;
        export function require(ns: 'Pango', ver?: '1.0'): typeof Pango;
            export function require(ns: 'PangoCairo'): typeof PangoCairo;
        export function require(ns: 'PangoCairo', ver?: '1.0'): typeof PangoCairo;
            export function require(ns: 'PangoFT2'): typeof PangoFT2;
        export function require(ns: 'PangoFT2', ver?: '1.0'): typeof PangoFT2;
            export function require(ns: 'PangoFc'): typeof PangoFc;
        export function require(ns: 'PangoFc', ver?: '1.0'): typeof PangoFc;
            export function require(ns: 'PangoOT'): typeof PangoOT;
        export function require(ns: 'PangoOT', ver?: '1.0'): typeof PangoOT;
            export function require(ns: 'PangoXft'): typeof PangoXft;
        export function require(ns: 'PangoXft', ver?: '1.0'): typeof PangoXft;
            export function require(ns: 'Vulkan'): typeof Vulkan;
        export function require(ns: 'Vulkan', ver?: '1.0'): typeof Vulkan;
            export function require(ns: 'cairo'): typeof cairo;
        export function require(ns: 'cairo', ver?: '1.0'): typeof cairo;
            export function require(ns: 'fontconfig'): typeof fontconfig;
        export function require(ns: 'fontconfig', ver?: '2.0'): typeof fontconfig;
            export function require(ns: 'freetype2'): typeof freetype2;
        export function require(ns: 'freetype2', ver?: '2.0'): typeof freetype2;
            export function require(ns: 'libxml2'): typeof libxml2;
        export function require(ns: 'libxml2', ver?: '2.0'): typeof libxml2;
            export function require(ns: 'xfixes'): typeof xfixes;
        export function require(ns: 'xfixes', ver?: '4.0'): typeof xfixes;
            export function require(ns: 'xft'): typeof xft;
        export function require(ns: 'xft', ver?: '2.0'): typeof xft;
            export function require(ns: 'xlib'): typeof xlib;
        export function require(ns: 'xlib', ver?: '2.0'): typeof xlib;
            export function require(ns: 'xrandr'): typeof xrandr;
        export function require(ns: 'xrandr', ver?: '1.3'): typeof xrandr;
        export function startLoop(): void;
}
