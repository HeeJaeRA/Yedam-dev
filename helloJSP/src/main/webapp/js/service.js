export default {

    async studentList(successCallback, errorCallback) {
        let req = await fetch('../studentList.do');
        let json = await req.json();
        try {
            successCallback(json);
        } catch (err) {
            errorCallback(err);
        }
    },

    async getStudent(id, successCallback, errorCallback) {
        let req = await fetch('../studentGet.do?id=' + id);
        let json = await req.json();
        try {
            successCallback(json);
        } catch (err) {
            errorCallback(err);
        }
    },

    async addStudent(optObj, successCallback, errorCallback) {
        let req = await fetch('../studentAdd.do', optObj);
        let json = await req.json();
        try {
            successCallback(json);
        } catch (err) {
            errorCallback(err);
        }
    },

    async editStudent(optObj, successCallback, errorCallback) {
        let req = await fetch('../studentMod.do', optObj);
        let json = await req.json();
        try {
            successCallback(json);
        } catch (err) {
            errorCallback(err);
        }
    },

    async removeStudent(id, successCallback, errorCallback) {
        let req = await fetch('../studentDel.do?sid=' + id);
        let json = await req.json();
        try {
            successCallback(json);
        } catch (err) {
            errorCallback(err);
        }
    }
}