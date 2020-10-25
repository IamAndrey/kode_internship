
const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
    },
    duda: {
        dada: {
            papa: {
                gaga: {
                    zaza: {
                        vava: '123456'
                    }
                },
                mama: 'papa'
            },
            qqqq: {
                zzzz: {
                    xxxx: 'cccc'
                }
            }
        },
        mmmm: {
            oooo: {
                dddd: {}
            }
        }
    }
};

const getObjectProperty = (obj, path, defaultValue) => {
    const keys = path.split('.')

    let temp = obj
    keys.forEach(key => {
        if (temp) {
            temp = temp[key]
        }
    })

    return temp || defaultValue;
}

console.log(getObjectProperty(obj, "pupa.lupa")) // > { beep : 'boop' }
console.log(getObjectProperty(obj, "pupa.lupa.beep")) // > 'boop'
console.log(getObjectProperty(obj, "pupa.foo")) // > 'bar'
console.log(getObjectProperty(obj, "pupa.ne.tuda")) // > undefined
console.log(getObjectProperty(obj, "pupa.ne.tuda", true)) // > true
console.log(getObjectProperty(obj, "pupa.ne.tuda", "Default value")) // > 'Default value'
console.log(getObjectProperty(obj, "duda.mmmm.oooo.dddd", "Default value")) // > '{}'
console.log(getObjectProperty(obj, "duda.dada.papa.gaga.zaza.vava")) // > '123456'



