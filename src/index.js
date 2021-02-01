module.exports = function toReadable(number) {
    let numberStr = number.toString()
    let numberStrArr = numberStr.split('')
    let numberArr = [] //!
    numberStrArr.forEach(n => numberArr.push(Number(n)))

    let _oneSynbolFunc = (unit) => {
        switch (unit) {
            case 0: return 'zero'
            case 1: return 'one'
            case 2: return 'two'
            case 3: return 'three'
            case 4: return 'four'
            case 5: return 'five'
            case 6: return 'six'
            case 7: return 'seven'
            case 8: return 'eight'
            case 9: return 'nine'
            default: return 'no such unit'
        }
    }

    let _twoSynbolFunc = (arr) => {
        if (arr[0] === 1) {
            switch (arr[1]) {
                case 0: return 'ten'
                case 1: return 'eleven'
                case 2: return 'twelve'
                case 3: return 'thirteen'
                case 4: return 'fourteen'
                case 5: return 'fifteen'
                case 6: return 'sixteen'
                case 7: return 'seventeen'
                case 8: return 'eighteen'
                case 9: return 'nineteen'
            }
        } else {
            switch (arr[0]) {
                case 2: return arr[1] === 0 ? 'twenty' : 'twenty' + ' ' + _oneSynbolFunc(arr[1])
                case 3: return arr[1] === 0 ? 'thirty' : 'thirty' + ' ' + _oneSynbolFunc(arr[1])
                case 4: return arr[1] === 0 ? 'forty' : 'forty' + ' ' + _oneSynbolFunc(arr[1])
                case 5: return arr[1] === 0 ? 'fifty' : 'fifty' + ' ' + _oneSynbolFunc(arr[1])
                case 6: return arr[1] === 0 ? 'sixty' : 'sixty' + ' ' + _oneSynbolFunc(arr[1])
                case 7: return arr[1] === 0 ? 'seventy' : 'seventy' + ' ' + _oneSynbolFunc(arr[1])
                case 8: return arr[1] === 0 ? 'eighty' : 'eighty' + ' ' + _oneSynbolFunc(arr[1])
                case 9: return arr[1] === 0 ? 'ninety' : 'ninety' + ' ' + _oneSynbolFunc(arr[1])
            }
        }
    }

    let _threeSynbolFunc = (arr) => {
        let unitArr = arr.slice(2)
        let tensArr = arr.slice(1)
        switch (arr[0]) {
            case 1: return arr[1] === 0 && arr[2] === 0 ? 'one hundred' : arr[1] === 0 ? 'one hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'one hundred' + ' ' + _twoSynbolFunc(tensArr)
            case 2: return arr[1] === 0 && arr[2] === 0 ? 'two hundred' : arr[1] === 0 ? 'two hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'two hundred' + ' ' + _twoSynbolFunc(tensArr)
            case 3: return arr[1] === 0 && arr[2] === 0 ? 'three hundred' : arr[1] === 0 ? 'three hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'three hundred' + ' ' + _twoSynbolFunc(tensArr)
            case 4: return arr[1] === 0 && arr[2] === 0 ? 'four hundred' : arr[1] === 0 ? 'four hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'four hundred' + ' ' + _twoSynbolFunc(tensArr)
            case 5: return arr[1] === 0 && arr[2] === 0 ? 'five hundred' : arr[1] === 0 ? 'five hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'five hundred' + ' ' + _twoSynbolFunc(tensArr)
            case 6: return arr[1] === 0 && arr[2] === 0 ? 'six hundred' : arr[1] === 0 ? 'six hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'six hundred' + ' ' + _twoSynbolFunc(tensArr)
            case 7: return arr[1] === 0 && arr[2] === 0 ? 'seven hundred' : arr[1] === 0 ? 'seven hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'seven hundred' + ' ' + _twoSynbolFunc(tensArr)
            case 8: return arr[1] === 0 && arr[2] === 0 ? 'eight hundred' : arr[1] === 0 ? 'eight hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'eight hundred' + ' ' + _twoSynbolFunc(tensArr)
            case 9: return arr[1] === 0 && arr[2] === 0 ? 'nine hundred' : arr[1] === 0 ? 'nine hundred' + ' ' + _oneSynbolFunc(unitArr[0]) : 'nine hundred' + ' ' + _twoSynbolFunc(tensArr)
        }
    }

    switch (numberArr.length) {
        case 1:
            return _oneSynbolFunc(numberArr[0])
        case 2:
            return _twoSynbolFunc(numberArr)
        case 3:
            return _threeSynbolFunc(numberArr)
        default:
            console.log('too big number')
    }
}

