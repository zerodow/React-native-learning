export const MM = 'Milimetre'
export const CM = 'Centimetre'
export const DM = 'Decimetre'
export const M = 'Metre'

export const KG = 'Kilogam'
export const HG = 'Hectogam'
export const DG = 'Decagam'
export const GM = 'Gam'

export const WEIGHT_TYPE = 'Weight'
export const LENGTH_TYPE = 'Length'

export const CHANGE_ARRAY_START = 'CHANGE_ARRAY_START'
export const CHANGE_ARRAY_RESULT = 'CHANGE_ARRAY_RESULT'
export const CHANGE_TYPE = 'CHANGE_TYPE'

export const dataLength = [
    {
        name: MM,
        value: 1,
        isChoosen: true
    },
    {
        name: CM,
        value: 10,
        isChoosen: false
    },
    {
        name: DM,
        value: 100,
        isChoosen: false
    },
    {
        name: M,
        value: 1000,
        isChoosen: false
    },
]

export const dataWeight = [
    {
        name: GM,
        value: 1,
        isChoosen: true
    },
    {
        name: DG,
        value: 10,
        isChoosen: false
    },
    {
        name: HG,
        value: 100,
        isChoosen: false
    },
    {
        name: KG,
        value: 1000,
        isChoosen: false
    },
]

export const type = [
    {
        name: WEIGHT_TYPE,
        isChoosen: false
    },
    {
        name: LENGTH_TYPE,
        isChoosen: true
    }
]