/*In the name of ALLAH*/
const St = imports.gi.St;
const Main = imports.ui.main;
const MessageTray = imports.ui.messageTray;
const Extension = imports.misc.extensionUtils.getCurrentExtension();
const quran=Extension.imports.quran;
function _showAye() {
aye=getAye();
let source = new MessageTray.SystemNotificationSource({style_class:'msg-style'});
    Main.messageTray.add(source);
    let notification = new MessageTray.Notification(source,null," قرآن کریم ، سوره "+sura[aye[0]]+" ، آیه "+farsiNum(aye[1])+" : \r\n\r\n"+aye[2]+"\r\n\r\n"+aye[3]
+"\r\n\r\n\r\n"+"ترجمه از آیت اللّه مکارم شیرازی"
+"\r\n\r\n"+"با تشکر از سایت تنزیل به خاطر متن و ترجمه قرآن :"+"\r\n\r\n www.tanzil.net");
    notification.setTransient(true);
    source.notify(notification);    
}
function init() {
    button = new St.Bin({ 
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let label = new St.Label({text:" quran " });
    button.set_child(label);
    button.connect('button-press-event', _showAye);
    _showAye();
}
function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}
function disable() {
    Main.panel._rightBox.remove_child(button);
}
