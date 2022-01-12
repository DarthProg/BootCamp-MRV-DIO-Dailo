const usuarios = new Map();
usuarios.set('Dailo', 'Admin');
usuarios.set('Lilian', 'Admin');
usuarios.set('Gabriel', 'User');
usuarios.set('Julia', 'User');

function getAdmins(map) {
let admins = [];
for([key, value] of map){
    if (value === 'Admin'){
        admins.push(key);
    }
}
return admins;
}

console.log(getAdmins(usuarios));
