interface GeneralInfo {
    productionPlace: string;
}
interface SpecificInfo extends GeneralInfo {
    price: number;
}
interface GeneralItem {
    name: string;
    weight?: number;
    available: boolean;
    specificData: SpecificInfo;
}
const exactItem: GeneralItem = {
    name: 'pencil',

    available: true,
    specificData: {
        price: 10,
        productionPlace: 'Hraskovo'
    }
}