class Projects {
    constructor(){
        this.projects = db.collection('Projects');
    }
    getData(callback){
        this.projects
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                callback(change.doc.data());
            });
        });
    }
}

export {Projects as default};