// for of  loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr)
{
    // console.log(num);
}

const greeting="hello world!"
for(const greet of greeting)
{
    // console.log(`each char is ${greet}`);
}

// Maps : map<int,int> ( key, value) unique value 

const map=new Map()
map.set('1',"abc")
map.set('2',"xyz")
map.set('3',"lmn")
map.set('4',"uvw")
// console.log(map);
for(const [key,value] of map)
{
    // console.log(key,':-',value);
}


// error 
const myObj={
    Game:'NFS',
    Game2:'gta'
}
// for(const [key,value] of myObj)
// {
//     console.log(key,':-',value);
// }
