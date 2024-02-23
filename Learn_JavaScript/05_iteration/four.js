// for ( _ in _ ) return keys (mainly for obj)
// for (__ of __ )return values(mainly for arr)
const myObj={
    js:"javaScript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

// for (const key in myObj) {
//     console.log(`${key} : ${myObj[key]}`);
// }

const programming=["js","rb","py","java","cpp"]
for(const key in programming)
{
    // console.log(key);//return index
    // console.log(programming[key]); // return vlaue 
}

//                      // not iterable return none 
// const map=new Map()
// map.set('1',"abc")
// map.set('2',"xyz")
// map.set('3',"lmn")
// map.set('4',"uvw")

// for(const key in map)
// {
//     console.log(key);
// }
