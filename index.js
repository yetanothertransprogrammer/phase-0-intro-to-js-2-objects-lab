

const employee = {
    name: 'Jimothy',
    streetAddress: '21 Kringlemas Lane'
};

function updateEmployeeWithKeyAndValue(obj,key,value){
    const tempObj = {...obj};
    tempObj[key] = value;
    return tempObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
     obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj,key){
    const trimObj={...obj};
    delete trimObj[key];
    return trimObj;
};

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
};