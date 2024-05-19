const categoryModel = require("../models/category.model")
const categoryController = {
    create: async (req, res) => {
        try {
            const category = await categoryModel.create(req.body)
            res.redirect('back')
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const category = await categoryModel.find({})
            res.render('pages/category/category', { categories: category })
        } catch (error) {
            console.log(error)
        }
    },
    form: (req, res) => {
        try {
            res.render('pages/category/addcategory')
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const category = await categoryModel.findByIdAndDelete(id)
            res.redirect('/category')
        } catch (error) {
            console.log(error)
        }
    },
    edit: async (req, res) => {
        const { id } = req.params
        try {
            const category = await categoryModel.findById(id)
            res.render('pages/category/editcategory', { category: category })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name } = req.body
        try {
            const category = await categoryModel.findByIdAndUpdate(id, { name: name }, { new: true })
            res.redirect('/category')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = categoryController