
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    breadId: id
});

export const filterProduct = (id) => ({
    type: FILTER_Product,
    categoryId: id
})
