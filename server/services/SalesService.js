const Sales = require('../models/Sales')


async function getOneById(id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const sale = await Sales.findById(id);
        return sale.toJSON()
    }
    return "[ERROR] SalesService - getOneById"
}

async function getManyByBuyerId(buyerId) {
    const sales = await Sales.find({ buyerId:  mongoose.Types.ObjectId(buyerId) });
    if (sales) {
        return sales.toJSON()
    } else {
        return "[ERROR] SalesService  - getManyByBuyerId"
    }
}

async function getManyByPaymentMethodId(paymentMethodId) {
    const sales = await Sales.find({ paymentMethodId:  mongoose.Types.ObjectId(paymentMethodId) });
    if (sales) {
        return sales.toJSON()
    } else {
        return "[ERROR] SalesService  - getManyByPaymentMethodId"
    }
}

async function getManyBySellerName(sellerName) {
    const sales = await Sales.find({ sellerName:  mongoose.Types.ObjectId(sellerName) });
    if (sales) {
        return sales.toJSON()
    } else {
        return "[ERROR] SalesService  - getManyBySellerName"
    }
}

async function getOneByInternalId(internalId) {
    const sale = await Sales.find({ internalId:  mongoose.Types.ObjectId(internalId) });
    if (sale) {
        return sale.toJSON()
    } else {
        return "[ERROR] SalesService  - getOneByInternalId"
    }
}

async function deleteOneById(id) {
    const sales = await Sales.deleteOne({ _id: mongoose.Types.ObjectId(id) }, function (err) {
        if (err) return err
    });
    return sales
}

async function saveOne(params) {
    if (getOneByInternalId(params.internalId) != "[ERROR] SalesService  - getOneByInternalId") {
        const sale = new Sales(params)
        await sale.save();
    } else {
        const sale = Sales.updateOne({ internalId: params.internalId }, params, function (err, res) {
            return err
        });
        await sale.toJson();
    }
}


module.exports = {
    getOneById,
    getManyByBuyerId,
    getManyByPaymentMethodId,
    getManyBySellerName,
    getOneByInternalId,
    deleteOneById,
    saveOne
};