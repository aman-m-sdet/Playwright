export class HomePage
    {
        constructor(page){
            this.page=page;
            this.ProdList='body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)';
            this.AddToCartBtn="//a[normalize-space()='Add to cart']";
            this.Cart ='#cartur';
        }
        async ADDPRODUCTTOCART(ProdName){
            const PrductList = await this.page.$$(this.ProdList);
            for (const Product of ProductList){
                if(ProdName == await Product.textcontext()){
                    await Product.click();
                    break;
                }
            }

        await this.page.on("dialog",async dailog =>{
            if(dailog.message().includes("added")){
                await dailog.accept();
            }
        });

        await this.page.locator(this.Cart)
        }
    }