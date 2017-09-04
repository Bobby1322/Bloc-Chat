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

        

        home.sendMessage = function () {
            home.newMessage.roomId = home.currentRoom.$id;
            home.newMessage.username = home.currentUser;
            home.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;;
            Message.send(home.newMessage);
            console.log(home.newMessage.sentAt);
            home.newMessage.content = null;
        }   
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();