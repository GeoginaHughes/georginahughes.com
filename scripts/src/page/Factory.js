/**
 * Created by georginahughes on 15/09/15.
 */
function Page() {
    var title = 'Georgina Hughes',
        menuMessage = 'Menu',
        mainClass = 'home',
        menuIsOpen = false;

    return {
        getTitle: getTitle,
        setTitle: setTitle,
        getMenuMessage: getMenuMessage,
        setMenuMessage: setMenuMessage,
        getMainClass: getMainClass,
        setMainClass: setMainClass,
        getMenuIsOpen: getMenuIsOpen,
        setMenuIsOpen: setMenuIsOpen,
        toggleMenu: toggleMenu,
        load: load
    };

    function getTitle() {
        return title;
    }

    function setTitle(newTitle){
        title = newTitle;
    }

    function getMenuMessage(){
        return menuMessage;
    }

    function setMenuMessage(newMessage){
        menuMessage = newMessage;
    }

    function getMainClass(){
        return mainClass;
    }

    function setMainClass(newClass){
        mainClass = newClass;
    }

    function getMenuIsOpen(){
        return menuIsOpen;
    }

    function setMenuIsOpen(isOpen){
        menuIsOpen = isOpen;
    }

    function toggleMenu(){
        if(menuIsOpen){
            setMenuMessage('Menu');
        } else {
            setMenuMessage('Close');
        }

        menuIsOpen = !menuIsOpen;
    }

    function load(){
        setMenuMessage('Menu');
        setMenuIsOpen(false);
    }
}