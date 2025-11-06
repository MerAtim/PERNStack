import app from './app.js'
import { PORT } from './config.js';

    app.listen(PORT);
    console.log(`Server ejecutándose en el puerto ${PORT} 🟢`);