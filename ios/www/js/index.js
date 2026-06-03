document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    PadMenu.print = onPrintSelected;
    PadMenu.selected = onSelected;

    document.getElementById('deviceready').classList.add('ready');
    
    //
    // This demo removes some items,  adds a user menu, some shortcuts, menu attributes, and images.
    //

    
    let tstjson = '{"iPadMenus": {  "remove": ["view","newItem","document","edit","format","preferences"], "padMenu": [{ "type": "user", "title": "User Menu", "afterMenuID": "application", "menuElements": [{"title":"Item 1","identifier": "item 1","shortcut": "6", "modifierFlags": ["command"],"menuImage": {"type": "symbol","name": "dice","symbolConfig":[{"type":"scale","value":"large"}]}},{"title":"Item 2","identifier": "item 2","shortcut": "7", "modifierFlags": ["command", "option"],"menuImage": {"type": "symbol","name": "dice","symbolConfig":[{"type":"weight","value":"bold"}]}},{"title":"Item 3","identifier": "item 3","menuImage": {"type": "symbol","name": "dice","symbolConfig":[{"type":"scale","value":"large"},{"type":"weight","value":"bold"}]}},{"title":"Item 4","identifier": "item 4","menuImage": {"type": "symbol","name": "dice"}} ,{"title":"Stop","identifier": "item 5","menuImage": {"type": "symbol","name": "flame.fill"}, "attributes": ["destructive"]} ], "menuTitle": "Menu","identifier": "file"}]}}';
    
    //
    // This demo is similar to the preceeding demo but adds menu items to existing menus.
    //

/*
    let tstjson = '{"iPadMenus": {  "remove": ["view","newItem","document","edit","format","preferences"], "padMenu": [{ "type": "main", "title": "User Menu", "identifier": "window", "menuElements":[{"title":"Item 33","identifier": "item 33","menuImage": {"type": "symbol","name": "dice","symbolConfig":[{"type":"weight","value":"bold"}]}}]},{ "type": "main", "title": "User Menu", "identifier": "file", "menuElements":[{"title":"Item 22","identifier": "item 22","menuImage": {"type": "symbol","name": "dice","symbolConfig":[{"type":"weight","value":"bold"}]}}]},{ "type": "user", "title": "User Menu", "afterMenuID": "application", "menuElements": [{"title":"Item 1","identifier": "item 1","shortcut": "6", "modifierFlags": ["command"],"menuImage": {"type": "symbol","name": "dice","symbolConfig":[{"type":"scale","value":"large"}]}},{"title":"Item 2","identifier": "item 2","shortcut": "7", "modifierFlags": ["command", "option"],"menuImage": {"type": "symbol","name": "dice","symbolConfig":[{"type":"weight","value":"bold"}]}},{"title":"Item 3","identifier": "item 3","menuImage": {"type": "symbol","name": "dice","symbolConfig":[{"type":"scale","value":"large"},{"type":"weight","value":"bold"}]}},{"title":"Item 4","identifier": "item 4","menuImage": {"type": "symbol","name": "dice"}} ,{"title":"Stop","identifier": "item 5","menuImage": {"type": "symbol","name": "flame.fill"}, "attributes": ["destructive"]} ], "menuTitle": "Menu","identifier": "file"}]}}';
*/
  
    //
    // This demo will produce a minimal menu
    //
/*
    let tstjson = '{"iPadMenus": { "remove": ["view","newItem","document","edit","format","preferences","file"]}}';
*/
    
    

    PadMenu.menuAction ('modify',null, () => {alert("Pre iOS26, no effect");},[tstjson]);

}
function onPrintSelected() {
    alert("Print Selected");
}

function onSelected(identifier) {
    alert("Selected "+ identifier);
}
