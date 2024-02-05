
import categoryRoutes from "./category/category.routes.js"
import subCategoryRoutes from "./subCategory/subCategory.routes.js"

export const allRoutes =(app)=>{
    app.use("/api/v1/category",categoryRoutes)
    app.use("/api/v1/subCategory",subCategoryRoutes)
   
}