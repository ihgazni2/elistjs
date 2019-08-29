

////MAP


/**
 * mapfivo
 * 
 * <pre>
 * each uppercase Ok IS A Array:
 *     Ok = [ok0,ok1,...,ok-xk]
 *
 * each mapfunc fk USE index k AND other args ok-0,ok-1,...,ok-xk AS arguments
 *     nvk = fk(k,vk,ok-0,ok-1,...,ok-xk)
 * </pre>
 *
 * @example
 * function
 *
 *     var arr = [100,200,300,400,500]
 *
 *     var mapFuncsArr = [
 *         (i,v,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"+"+o1+" is "+(v+o1)),
 *         (i,v,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"-"+o1+" is "+(v-o1)),
 *         (i,v,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"*"+o1+" is "+(v*o1)),
 *         (i,v,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"/"+o1+" is "+(v/o1)),
 *         (i,v,o0,o1)=>("operation "+i+":"+o0+" "+":"+v+"%"+o1+" is "+(v%o1))
 *     ]
 *
 *     var otherArgsArr = [
 *         ["plus",10],
 *         ["minus",20],
 *         ["mul",30],
 *         ["div",40],
 *         ["mod",50]
 *     ]
 *
 *     var narr = mapfivo(arr,mapFuncsArr,otherArgsArr)
 *     arr
 *     narr
 *     
 *     ////
 *     > arr
 *     [ 100, 200, 300, 400, 500 ]
 *     > narr
 *     [ 'operation 0:plus :100+10 is 110',
 *       'operation 1:minus :200-20 is 180',
 *       'operation 2:mul :300*30 is 9000',
 *       'operation 3:div :400/40 is 10',
 *       'operation 4:mod :500%50 is 0' ]
 *     >
 *
 * @example
 * prototype
 * 
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgsArr - [O0,O1,O2,...,Ok,...,On]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapfivo(arr,mapFuncsArr,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let value = arr[i]
        let func = mapFuncsArr[i]
        let oargs = otherArgsArr[i]
        let ele = func(index,value,...oargs)
        narr.push(ele)
    }
    return(narr)
}


function _mapfivo(mapFuncsArr,otherArgsArr) {
    return(mapfivo(this,mapFuncsArr,otherArgsArr))
}


Object.defineProperty(Array.prototype, "mapfivo", {
    value: _mapfivo,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * mapfiv
 *
 * each mapfunc fk USE index k AND other args o0,o1,...,ok,...,ox AS arguments 
 *     nvk = fk(k,vk,o0,o1,...,ok...,ox)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgs - [o0,o1,o2,...,ok,...,ox]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapfiv(arr,mapFuncsArr,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let otherArgsArr = Array(arr.length).fill(otherArgs)
    return(mapfivo(arr,mapFuncsArr,otherArgsArr))
}


Object.defineProperty(Array.prototype, "mapfiv", {
    value: mapfiv,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * mapfio
 *
 * each uppercase Ok IS A Array
 *     Ok = [ok0,ok1,...,ok-xk]
 *
 * each mapfunc fk USE index k AND other args ok-0,ok-1,...,ok-xk AS arguments
 *     nvk = fk(k,ok-0,ok-1,...,ok-xk)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgsArr - [O0,O1,O2,...,Ok,...,On]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */




function mapfio(arr,mapFuncsArr,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let func = mapFuncsArr[i]
        let oargs = otherArgsArr[i]
        let ele = func(index,...oargs)
        narr.push(ele)
    }
    return(narr)
}


Object.defineProperty(Array.prototype, "mapfio", {
    value: mapfio,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * mapfvo
 *
 * each uppercase Ok IS A Array:
 *     Ok = [ok0,ok1,...,ok-xk]
 *
 * each mapfunc fk USE value vk  AND other args ok-0,ok-1,...,ok-xk AS arguments
 *     nvk = fk(vk,ok-0,ok-1,...,ok-xk)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgsArr - [O0,O1,O2,...,Ok,...,On]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */



function mapfvo(arr,mapFuncsArr,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let value = arr[i]
        let func = mapFuncsArr[i]
        let oargs = otherArgsArr[i]
        let ele = func(value,...oargs)
        narr.push(ele)
    }
    return(narr)
}


Object.defineProperty(Array.prototype, "mapfvo", {
    value: mapfvo,
    writable: true,
    enumerable: false,
    configurable: true
})


////
/**
 * mapfv
 *
 * each mapfunc fk USE vk AND other args o0,o1,...,ok,...,ox AS arguments
 *     nvk = fk(vk,o0,o1,...,ox)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgs - [o0,o1,o2,...,ok,...,ox]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapfv(arr,mapFuncsArr) {
    let otherArgsArr = Array(arr.length).fill([])
    let narr = mapfvo(arr,mapFuncsArr,otherArgsArr)
    return(narr)
}

Object.defineProperty(Array.prototype, "mapfv", {
    value: mapfv,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * mapivo
 *
 * each uppercase Ok IS A Array:
 *     Ok = [ok0,ok1,...,ok-xk]
 *
 * mapfunc f USE index k AND other args ok-0,ok-1,...,ok-xk AS arguments
 *     nvk = f(k,vk,ok-0,ok-1,...,ok-xk)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} otherArgsArr - [O0,O1,O2,...,Ok,...,On]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapivo(arr,mapFunc,otherArgsArr) {
    let mapFuncsArr = Array(arr.length).fill(mapFunc)
    return(mapfivo(arr,mapFuncsArr,otherArgsArr))
}

Object.defineProperty(Array.prototype, "mapivo", {
    value: mapivo,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * mapfi
 *
 *
 * each mapfunc fk USE index k AND other args o0,o1,...,ok,...,ox  AS arguments
 *     nvk = fk(k,vk,ok-0,ok-1,...,ok-xk)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapfi(arr,mapFuncsArr,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let func = mapFuncsArr[i]
        let ele = func(index,...otherArgs)
        narr.push(ele)
    }
    return(narr)
}

Object.defineProperty(Array.prototype, "mapfi", {
    value: mapfi,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * mapfo
 * 
 * <pre>
 * each uppercase Ok IS A Array:
 *     Ok = [ok0,ok1,...,ok-xk]
 *
 * each mapfunc fk USE other args ok-0,ok-1,...,ok-xk AS arguments
 *     nvk = fk(ok-0,ok-1,...,ok-xk)
 * </pre>
 *
 * @example
 * function    
 *
 *     var arr = [100,200,300,400,500]
 *     
 *     var mapFuncsArr = [
 *         (o0,o1)=>(o0(o1)),
 *         (o0,o1)=>(o0(o0(o1))),
 *         (o0,o1)=>(o0(o0(o0(o1)))),
 *         (o0,o1)=>(o0(o0(o0(o0(o1))))),
 *         (o0,o1)=>(o0(o0(o0(o0(o0(o1)))))),
 *     ]
 *     
 *     var otherArgsArr = [
 *         [Math.sin,1],
 *         [Math.cos,2],
 *         [Math.tan,3],
 *         [Math.tanh,4],
 *         [Math.sqrt,5]
 *     ]
 *     
 *     var narr = mapfo(arr,mapFuncsArr,otherArgsArr)
 *    
 *     ////
 *     > arr
 *     [ 100, 200, 300, 400, 500 ]
 *     > narr
 *     [ 0.8414709848078965,
 *       0.9146533258523714,
 *       -0.14451354178374737,
 *       0.566157406536178,
 *       1.0515811984959769 ]
 *     >
 *
 * @example
 * ptototype
 *
 *     ////
 *     > arr.mapfo(mapFuncsArr,otherArgsArr)
 *     [ 0.8414709848078965,
 *       0.9146533258523714,
 *       -0.14451354178374737,
 *       0.566157406536178,
 *       1.0515811984959769 ]
 *     >
 *     > arr
 *     [ 100, 200, 300, 400, 500 ]
 *     >
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgsArr - [O0,O1,O2,...,Ok,...,On]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapfo(arr,mapFuncsArr,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = mapFuncsArr[i]
        let oargs = otherArgsArr[i]
        let ele = func(...oargs)
        narr.push(ele)
    }
    return(narr)
}

function _mapfo(mapFuncsArr,otherArgsArr) {
    return(mapfo(this,mapFuncsArr,otherArgsArr))
}

Object.defineProperty(Array.prototype, "mapfo", {
    value: _mapfo,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * mapiv
 *
 * mapfunc f USE index k AND value vk AND other args o0,o1,o2,...,ok,...,ox AS arguments
 *     nvk = fk(k,vk,o0,o1,o2,...,ok,...,ox)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgs - [o0,o1,o2,...,ok,...,ox]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapiv(arr,mapFunc,otherArgs) {
    let mapFuncsArr = Array(arr.length).fill(mapFunc)
    return(mapfiv(arr,mapFuncsArr,otherArgs))
}


Object.defineProperty(Array.prototype, "mapiv", {
    value: mapiv,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * mapio
 *
 * each uppercase Ok IS A Array:
 *     Ok = [ok0,ok1,...,ok-xk]
 *
 * mapfunc f USE index k AND other args ok-0,ok-1,...,ok-xk AS arguments
 *     nvk = fk(k,vk,ok-0,ok-1,...,ok-xk)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgsArr - [O0,O1,O2,...,Ok,...,On]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapio(arr,mapFunc,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let func = mapFunc
        let oargs = otherArgsArr[i]
        let ele = func(index,...oargs)
        narr.push(ele)
    }
    return(narr)
}

Object.defineProperty(Array.prototype, "mapio", {
    value: mapio,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * mapvo
 *
 * each uppercase Ok IS A Array:
 *     Ok = [ok0,ok1,...,ok-xk]
 *
 * each mapfunc fk USE value vk  AND other args ok-0,ok-1,...,ok-xk AS arguments
 *     nvk = fk(k,vk,ok-0,ok-1,...,ok-xk)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgsArr - [O0,O1,O2,...,Ok,...,On]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapvo(arr,mapFunc,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let value = arr[i]
        let func = mapFunc
        let oargs = otherArgsArr[i]
        let ele = func(value,...oargs)
        narr.push(ele)
    }
    return(narr)
}

Object.defineProperty(Array.prototype, "mapvo", {
    value: mapvo,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * mapf
 *
 * <pre>
 * each mapfunc fk USE other args o0,o1,o2,...,ok,...,ox  AS arguments
 *     nvk = fk(o0,o1,o2,...,ok,...,ox)
 * </pre>
 *
 * @example
 * function
 *
 *     var arr = [100,200,300,400,500]
 *     
 *     var mapFuncsArr = [
 *         (o0,o1)=>(o0(o1)),
 *         (o0,o1)=>(o0(o0(o1))),
 *         (o0,o1)=>(o0(o0(o0(o1)))),
 *         (o0,o1)=>(o0(o0(o0(o0(o1))))),
 *         (o0,o1)=>(o0(o0(o0(o0(o0(o1)))))),
 *     ]
 *     
 *     var otherArgs = [Math.sin,1]
 *     
 *     var narr = mapf(arr,mapFuncsArr,otherArgs)
 *     
 *     ////
 *     > arr
 *     [ 100, 200, 300, 400, 500 ]
 *     > narr
 *     [ 0.8414709848078965,
 *       0.7456241416655579,
 *       0.6784304773607402,
 *       0.6275718320491591,
 *       0.5871809965734309 ]
 *     >
 *
 * @example
 * prototype
 *
 *
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgs - [o0,o1,o2,...,ok,...,ox]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapf(arr,mapFuncsArr,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let otherArgsArr = Array(arr.length).fill(otherArgs)
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = mapFuncsArr[i]
        let oargs = otherArgsArr[i]
        let ele = func(...oargs)
        narr.push(ele)
    }
    return(narr)
}

function _mapf(arr,mapFuncsArr,otherArgs) {
    return(mapf(this,mapFuncsArr,otherArgs))
}

Object.defineProperty(Array.prototype, "mapf", {
    value: _mapf,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * mapi
 *
 *
 * mapfunc f USE index k AND other args o0,o1,o2,...,ok,...,ox  AS arguments
 *     nvk = fk(k,o0,o1,o2,...,ok,...,ox)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgs - [o0,o1,o2,...,ok,...,ox]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapi(arr,mapFunc,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let ele = mapFunc(i,...oargs)
        narr.push(ele)
    }
    return(narr)
}

Object.defineProperty(Array.prototype, "mapi", {
    value: mapi,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * mapv
 *
 *
 * mapfunc f USE value vk  AND other args o0,o1,o2,...,ok,...,ox  AS arguments
 *     nvk = fk(k,o0,o1,o2,...,ok,...,ox)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgs - [o0,o1,o2,...,ok,...,ox]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */



function mapv(arr,mapFunc,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let ele = mapFunc(arr[i],...otherArgs)
        narr.push(ele)
    }
    return(narr)
}


Object.defineProperty(Array.prototype, "mapv", {
    value: mapv,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * mapo
 *
 * each uppercase Ok IS A Array:
 *     Ok = [ok0,ok1,...,ok-xk]
 *
 * mapfunc f USE other args ok-0,ok-1,...,ok-xk AS arguments
 *     nvk = fk(ok-0,ok-1,...,ok-xk)
 *
 * @param {Array} arr - [v0,v1,v2,...,vk,...,vn]
 * @param {Array} mapFuncsArr - [f0,f1,f2,...,fk,...,fn]
 * @param {Array} otherArgsArr - [O0,O1,O2,...,Ok,...,On]
 * @return {Array} narr - [nv0,nv1,nv2,...,nvk,...,nvn]
 */


function mapo(arr,mapFunc,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let ele = mapFunc(i,...otherArgsArr[i])
        narr.push(ele)
    }
    return(narr)
}


Object.defineProperty(Array.prototype, "mapo", {
    value: mapo,
    writable: true,
    enumerable: false,
    configurable: true
})



////SLCT

function slctivFivo(arr,condFuncsArr,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let value = arr[i]
        let func = condFuncsArr[i]
        let oargs = otherArgsArr[i]
        let cond = func(index,value,...oargs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiFivo(arr,condFuncsArr,otherArgsArr) {
    let narr = slctivFivo(arr,condFuncsArr,otherArgsArr)
    return(narr.map((ele)=>(ele.i)))
}

function slctvFivo(arr,condFuncsArr,otherArgsArr) {
    let narr = slctivFivo(arr,condFuncsArr,otherArgsArr)
    return(narr.map((ele)=>(ele.v)))
}

function slctivFiv(arr,condFuncsArr,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let otherArgsArr = Array(arr.length).fill(otherArgs)
    return(slctivFivo(arr,condFuncsArr,otherArgsArr))
}

function slctiFiv(arr,condFuncsArr,otherArgs) {
    let narr = slctivFiv(arr,condFuncsArr,otherArgs)
    return(narr.map((ele)=>(ele.i)))
}

function slctvFiv(arr,condFuncsArr,otherArgs) {
    let narr = slctivFiv(arr,condFuncsArr,otherArgs)
    return(narr.map((ele)=>(ele.v)))
}

function slctivFio(arr,condFuncsArr,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let func = condFuncsArr[i]
        let oargs = otherArgsArr[i]
        let cond = func(index,...oargs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiFio(arr,condFuncsArr,otherArgsArr) {
    let narr = slctivFio(arr,condFuncsArr,otherArgsArr)
    return(narr.map((ele)=>(ele.i)))
}

function slctvFio(arr,condFuncsArr,otherArgsArr) {
    let narr = slctivFio(arr,condFuncsArr,otherArgsArr)
    return(narr.map((ele)=>(ele.v)))
}

function slctivFvo(arr,condFuncsArr,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let value = arr[i]
        let func = condFuncsArr[i]
        let oargs = otherArgsArr[i]
        let cond = func(value,...oargs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiFvo(arr,condFuncsArr,otherArgsArr) {
    let narr = slctiFvo(arr,condFuncsArr,otherArgsArr)
    return(narr.map((ele)=>(ele.i)))
}

function slctvFvo(arr,condFuncsArr,otherArgsArr) {
    let narr = slctiFvo(arr,condFuncsArr,otherArgsArr)
    return(narr.map((ele)=>(ele.v)))
}

function slctivIvo(arr,condFunc,otherArgsArr) {
    let condFuncsArr = Array(arr.length).fill(condFunc)
    return(slctiFivo(arr,condFuncsArr,otherArgsArr))
}

function slctiIvo(arr,condFunc,otherArgsArr) {
    let narr = slctivIvo(arr,condFunc,otherArgsArr)
    return(narr.map((ele)=>(ele.i)))
}

function slctvIvo(arr,condFunc,otherArgsArr) {
    let narr = slctivIvo(arr,condFunc,otherArgsArr)
    return(narr.map((ele)=>(ele.v)))
}

function slctivFi(arr,condFuncsArr,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let func = condFuncsArr[i]
        let cond = func(index,...otherArgs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiFi(arr,condFuncsArr,otherArgs) {
    let narr = slctivFi(arr,condFuncsArr,otherArgs)
    return(narr.map((ele)=>(ele.i)))
}

function slctvFi(arr,condFuncsArr,otherArgs) {
    let narr = slctivFi(arr,condFuncsArr,otherArgs)
    return(narr.map((ele)=>(ele.v)))
}

function slctivFo(arr,condFuncsArr,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = condFuncsArr[i]
        let oargs = otherArgsArr[i]
        let cond = func(...oargs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiFo(arr,condFuncsArr,otherArgsArr) {
    let narr = slctivFo(arr,condFuncsArr,otherArgsArr)
    return(narr.map((ele)=>(ele.i)))
}

function slctvFo(arr,condFuncsArr,otherArgsArr) {
    let narr = slctivFo(arr,condFuncsArr,otherArgsArr)
    return(narr.map((ele)=>(ele.v)))
}

function slctivIv(arr,condFunc,otherArgs) {
    let condFuncsArr = Array(arr.length).fill(condFunc)
    let otherArgsArr = Array(arr.length).fill(otherArgs)
    return(slctiFivo(arr,condFuncsArr,otherArgsArr))
}

function slctiIv(arr,condFunc,otherArgs) {
    let narr = slctivIv(arr,condFunc,otherArgs)
    return(narr.map((ele)=>(ele.i)))
}

function slctvIv(arr,condFunc,otherArgs) {
    let narr = slctivIv(arr,condFunc,otherArgs)
    return(narr.map((ele)=>(ele.v)))
}

function slctivIo(arr,condFunc,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let index = i
        let oargs = otherArgsArr[i]
        let cond = condFunc(index,...oargs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiIo(arr,condFunc,otherArgsArr) {
    let narr = slctivIo(arr,condFunc,otherArgsArr)
    return(narr.map((ele)=>(ele.i)))
}

function slctvIo(arr,condFunc,otherArgsArr) {
    let narr = slctivIo(arr,condFunc,otherArgsArr)
    return(narr.map((ele)=>(ele.v)))
}

function slctivVo(arr,condFunc,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let value = arr[i]
        let oargs = otherArgsArr[i]
        let cond = condFunc(value,...oargs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiVo(arr,condFunc,otherArgsArr) {
    let narr = slctivVo(arr,condFunc,otherArgsArr)
    return(narr.map((ele)=>(ele.i)))
}

function slctvVo(arr,condFunc,otherArgsArr) {
    let narr = slctivVo(arr,condFunc,otherArgsArr)
    return(narr.map((ele)=>(ele.v)))
}

function slctivF(arr,condFuncsArr,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = condFuncsArr[i]
        let cond = func(...otherArgs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiF(arr,condFuncsArr,otherArgs) {
    let narr = slctivF(arr,condFuncsArr,otherArgs)
    return(narr.map((ele)=>(ele.i)))
}

function slctvF(arr,condFuncsArr,otherArgs) {
    let narr = slctivF(arr,condFuncsArr,otherArgs)
    return(narr.map((ele)=>(ele.v)))
}

function slctivI(arr,condFunc,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = condFunc
        let cond = func(i,...otherArgs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiI(arr,condFunc,otherArgs) {
    let narr = slctivI(arr,condFunc,otherArgs)
    return(narr.map((ele)=>(ele.i)))
}

function slctvI(arr,condFunc,otherArgs) {
    let narr = slctivI(arr,condFunc,otherArgs)
    return(narr.map((ele)=>(ele.v)))
}

function slctivV(arr,condFunc,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = condFunc
        let cond = func(arr[i],...otherArgs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiV(arr,condFunc,otherArgs) {
    let narr = slctivV(arr,condFunc,otherArgs)
    return(narr.map((ele)=>(ele.i)))
}

function slctvV(arr,condFunc,otherArgs) {
    let narr = slctivV(arr,condFunc,otherArgs)
    return(narr.map((ele)=>(ele.v)))
}

function slctivO(arr,condFunc,otherArgsArr) {
    if(otherArgsArr===undefined) {
        otherArgsArr = Array(arr.length).fill([])
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let oargs = otherArgsArr[i]
        let cond = condFunc(...oargs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}

function slctiO(arr,condFunc,otherArgsArr) {
    let narr = slctivO(arr,condFunc,otherArgsArr)
    return(narr.map((ele)=>(ele.i)))
}
function slctvO(arr,condFunc,otherArgsArr) {
    let narr = slctivO(arr,condFunc,otherArgsArr)
    return(narr.map((ele)=>(ele.v)))
}

//
function replDefaultCondFunc(index,ele,orig) {
    return(ele===orig)
}

function replfivo(arr,replacer,condFuncsArr,otherArgsArr) {
    let indexes = slctiFivo(arr,condFuncsArr,otherArgsArr)
    let narr = Array.from(arr)
    for(let index of indexes) {
	narr[index] = replacer
    }
    return(narr)
}


//

function replace(arr,orig,replacer) {
    let narr = Array.from(arr)
    for(let i=0;i<narr.length;i++){
        if(narr[i] === orig){
	    narr[i] = replacer
	}
    }
    return(narr)
}


//
function diffDefaultCondFunc(strict){
    if(strict===undefined){
        strict=false
    } else {
    }
    if(strict){
	return((arr1,arr2,i)=>(arr1[i]===arr2[i]))
    } else {
	return((arr1,arr2,i)=>(arr2.includes(arr1[i])))
    }
}


function diffv(arr1,arr2,strict,condFunc) {
    if(condFunc === undefined) {
        condFunc = diffDefaultCondFunc(strict)
    } else {
    }
    let narr = []
    for(var i in arr1){
        if(condFunc(arr1,arr2,i)){
        } else {
            narr.push(arr1[i])
        }
    }
    return(narr)
}

function diffi(arr1,arr2,strict,condFunc) {
    if(condFunc === undefined) {
        condFunc = diffDefaultCondFunc(strict)
    } else {
    }
    let narr = []
    for(var i in arr1){
        if(condFunc(arr1,arr2,i)){
        } else {
            narr.push(arr1[i])
        }
    }
    return(narr)
}

function diffiv(arr1,arr2,strict,condFunc) {
    if(condFunc === undefined) {
        condFunc = diffDefaultCondFunc(strict)
    } else {
    }
    let narr = []
    for(var i in arr1){
        if(condFunc(arr1,arr2,i)){
        } else {
            narr.push({"index":i,"value":arr1[i]})
        }
    }
    return(narr)
}

//

function init(lngth,value) {
    return(Array.apply(null, Array(lngth)).map((ele) => value))
}

/*
function divide(arr,width) {
    let segs = []
    let c = 0
    while(c<arr.length){
        let seg = arr.slice(c,c+width)
        segs.push(seg)
        c = c  + width
    }
    return(segs)
}
*/


//

function kvlist2d(kl,vl) {
    let d = {}
    for(let i =0;i<kl.length;i++){
        d[kl[i]] = vl[i]
    }
    return(d)
}

function d2kvlist(d) {
    let kl = Object.keys(d)
    let vl = mapv(kl,(k)=>(d[k]))
    return([kl,vl])
}
//

//
function reheadI(arr,index) {
    let tail  =  arr.slice(0,index)
    let head = arr.slice(index)
    return(Array.prototype.concat(head,tail))
}

function reheadV(arr,value) {
    let index = arr.indexOf(value)
    return(reheadI(arr,index))
}
//






//two list 
function interleave(l1,l2) {
    let lngth = Math.min(l1.length,l2.length)
    let nl =[]
    for(let i=0;i<lngth;i++){
        nl.push(l1[i])
	nl.push(l2[i])
    }
    if(l1.length>lngth) {
        for(let i=lngth;i<l1.length;i++){
	    nl.push(l1[i])
	}
    } 
    if(l2.length>lngth) {
        for(let i=lngth;i<l2.length;i++){
            nl.push(l2[i])
        }
    }
    return(nl)
}
//


//list2mat  mat2list


function matRc2index (row,col,colnums)  {
  let index = row  * colnums
  return(index + col) 
}

function matIndex2rc (index,colnums)  {
   let col = index % colnums
   let row = (index - col)/colnums
   return([row,col])
}


function getRowNumsViaLength(lngth, colNums)  {
  let r = lngth % colNums
  let rowNums = parseInt((lngth - r) / colNums)
  if (r === 0) { } else { rowNums = rowNums + 1 }
  return (rowNums)
}

function list2mat(arr, colnums)  {
  let lngth = arr.length
  let rownums = getRowNumsViaLength(lngth, colnums)
  let mat = []
  let index = 0
  for (var i = 0; i < rownums; i++) {
    let level = []
    for (var j = 0; j < colnums; j++) {
      if (index < lngth) {
        level.push(arr[index])
      }
      index = index + 1
    }
    mat.push(level)
  }
  return (mat)
}


function list2mat2(arr, colnums, rownums) {
    let mat = []
    let index = 0
    for (var i = 0; i < rownums; i++) {
      let level = []
      for (var j = 0; j < colnums; j++) {
        level.push(arr[index])
        index = index + 1
      }
      mat.push(level)
    }
    return (mat)
}




function mat2list(mat) {
    let l = []
    for(let r=0;r<mat.length;r++) {
        let layer = mat[r]
	for(let c=0;c<layer.length;c++) {
	    l.push(layer[c])
	}
    }
    return(l)
}

function transpose(mat) {
  return mat[0].map((col, c) => mat.map((row, r) => mat[r][c]));
}

//
//otherArrsArray  is a array of argsArray
//for exzample 
//arr = [1,2,3,4,5]
//args0 = ['a','b','c','d','e']
//args1 = ['u','v','w','x','y']
//mapFunc(arr[i],args0[i],args1[i])
//batmap(arr,mapFunc,[args0,args1])
function batmap(arr,mapFunc,otherArrsArray) {
    let narr = []
    otherArrsArray = transpose(otherArrsArray)
    for(var i=0;i<arr.length;i++){
        let value = arr[i]
        let func = mapFunc
        let oargs = otherArrsArray[i]
        let ele = func(value,...oargs)
        narr.push(ele)
    }
    return(narr)
}


function index1dto2d(lngth,colNums) {
    let r = (lngth - lngth%colNums)/colNums
    let c = lngth%colNums
    return([r,c])
}

function index2dto1d(r,c,colNums) {
    return(colNums*r+c)
}

function initMat(layerNums,layerLength,value) {
    var mat = Array(layerNums).fill(value)
    for(let i=0;i<mat.length;i++){
        mat[i] = Array(layerLength).fill(value)
    }
    return(mat)
}

//

function divide(arr,step) {
  let len = arr.length;
  let rslt = []
  for(let i =0;i<len;i=i+step){
    let ele = arr.slice(i,i+step)
    rslt.push(ele)
  }
  return(rslt)
}
//
function extendWithOneValue(arr,value,nums) {
  let narr = Array(nums).fill(value)
  return(Array.prototype.concat(arr,narr))
}

//uniqualize
function uniqualize(arr) {
    let st = new Set(arr)
    return(Array.from(st))
}


Object.defineProperty(Array.prototype, "uniqualize", {
    value: function () {
        let st = new Set(this);
        return(Array.from(st))
    },
    writable: true,
    enumerable: false,
    configurable: true
});


//function uniqualizeKeepOrder

// flat

function flat(arr) {
    while(arr.some(item => Array.isArray(item))){
        arr=[].concat(...arr)
    }
    return(arr)
}

Object.defineProperty(Array.prototype, "flat", {
    value: function () {
        let arr = this
        while(arr.some(item => Array.isArray(item))){
            arr=[].concat(...arr)
        }
        return(arr)
    },
    writable: true,
    enumerable: false,
    configurable: true
});
//

////
function tlist(arr) {
    let it = arr.entries()
    return(Array.from(it))
}

Object.defineProperty(Array.prototype, "tlist", {
    value: tlist,
    writable: true,
    enumerable: false,
    configurable: true
})

function allIndexesOf(arr,value) {
    let tl =  tlist(arr)
    tl= tl.filter((t)=>(t[1] == value))
    tl = tl.map((r)=>r[0])
    return(tl)
}

Object.defineProperty(Array.prototype, "allIndexesOf", {
    value: allIndexesOf,
    writable: true,
    enumerable: false,
    configurable: true
})



////

module.exports = {
    mapfivo:mapfivo,
    mapfiv:mapfiv,
    mapfio:mapfio,
    mapfvo:mapfvo,
    mapivo:mapivo,
    mapfi:mapfi,
    mapfv:mapfv,
    mapfo:mapfo,
    mapiv:mapiv,
    mapio:mapio,
    mapvo:mapvo,
    mapf:mapf,
    mapi:mapi,
    mapv:mapv,
    mapo:mapo,
    slctivFivo:slctivFivo,
    slctiFivo:slctiFivo,
    slctvFivo:slctvFivo,
    slctivFiv:slctivFiv,
    slctiFiv:slctiFiv,
    slctvFiv:slctvFiv,
    slctivFio:slctivFio,
    slctiFio:slctiFio,
    slctvFio:slctvFio,
    slctivFvo:slctivFvo,
    slctiFvo:slctiFvo,
    slctvFvo:slctvFvo,
    slctivIvo:slctivIvo,
    slctiIvo:slctiIvo,
    slctvIvo:slctvIvo,
    slctivFi:slctivFi,
    slctiFi:slctiFi,
    slctvFi:slctvFi,
    slctivFo:slctivFo,
    slctiFo:slctiFo,
    slctvFo:slctvFo,
    slctivIv:slctivIv,
    slctiIv:slctiIv,
    slctvIv:slctvIv,
    slctivIo:slctivIo,
    slctiIo:slctiIo,
    slctvIo:slctvIo,
    slctivVo:slctivVo,
    slctiVo:slctiVo,
    slctvVo:slctvVo,
    slctivF:slctivF,
    slctiF:slctiF,
    slctvF:slctvF,
    slctivI:slctivI,
    slctiI:slctiI,
    slctvI:slctvI,
    slctivV:slctivV,
    slctiV:slctiV,
    slctvV:slctvV,
    slctivO:slctivO,
    slctiO:slctiO,
    slctvO:slctvO,
    replfivo:replfivo,
    replace:replace,
    interleave:interleave,
    diffi:diffi,
    diffv:diffv,
    diffiv:diffiv,
    init:init,
    divide:divide,
    kvlist2d:kvlist2d,
    d2kvlist:d2kvlist,
    reheadI:reheadI,
    reheadV:reheadV,
    getRowNumsViaLength:getRowNumsViaLength,
    matRc2index:matRc2index,
    matIndex2rc:matIndex2rc,
    list2mat:list2mat,
    list2mat2:list2mat2,
    mat2list:mat2list,
    transpose:transpose,
    batmap:batmap,
    index1dto2d:index1dto2d,
    index2dto1d:index2dto1d,
    initMat:initMat,
    extendWithOneValue:extendWithOneValue,
    uniqualize:uniqualize,
    tlist:tlist,
    allIndexesOf:allIndexesOf
}
