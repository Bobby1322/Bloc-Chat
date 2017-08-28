(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = null;
        home.currentUser = $cookies.get('blocChatCurrentUser');
        
        home.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        
        home.setCurrentRoom = function (room) {
            home.currentRoom = room;
            home.messages = Message.getByRoomId(home.currentRoom.$id);
            console.log(home.currentRoom);
            console.log(home.messages);
            console.log(home.currentUser);
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();