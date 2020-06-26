// const thing = require('./thing');
console.log(imports);
const Gtk = imports.gi.Gtk;

let app = new Gtk.Application({ application_id: 'org.gtk.ExampleApp' });

app.connect('activate', () => {
    let win = new Gtk.ApplicationWindow({ application: app });
    let btn = new Gtk.Button({ label: thing });
    btn.connect('clicked', () => { win.destroy(); });
    win.add(btn);
    win.show_all();
});

app.run([]);
