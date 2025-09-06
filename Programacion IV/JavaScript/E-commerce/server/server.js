import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
    accessToken: 'APP_USR-5056574560531615-090123-7edbab2ac12d72ea938afdaaf950377d-2660554541', //<--vendedor
});

    const app = express();
    const port = 8080;
    app.use(cors());
    app.use(express.json());
    
    app.get("/", (req, res) => {
    res.send("Soy el server.");
    });

    app.post("/create_preference", async (req, res) => {
        try{
            const body = {
                items: [{
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls:{
                success: "https://capymarket.netlify.app/gracias.html",
                failure: "https://capymarket.netlify.app/gracias.html",
                pending: "https://capymarket.netlify.app/gracias.html"
            },
            auto_return: "approved"
        };

        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        })
        }catch(error){
            console.log(error);
            result.status(500).json({
                error: "Error al crear la preferencia"
            })
        }
    });

    app.listen(port, () => {
        console.log(`El servidor esta corriendo en el puerto ${port}`);
    });