# 🎨 Render: Alternativa 100% GRATUITA (más lento, pero gratis para siempre)

> **Render es como Netlify pero también para backend + base de datos**

---

## ⚖️ Render vs Railway

| Característica | Render (Gratis) | Railway ($5/mes gratis) |
|----------------|-----------------|-------------------------|
| Precio | **GRATIS para siempre** | $5 USD crédito mensual |
| Velocidad | 🐢 Más lento (se duerme después de 15 min) | 🚀 Más rápido |
| PostgreSQL | ✅ Gratis con límites (90 días, luego se borra) | ✅ Incluido |
| Despliegue automático | ✅ Sí | ✅ Sí |
| Mejor para | Proyectos de prueba/escuela | Proyectos serios |

---

## PASO 1: Crear cuenta en Render (2 minutos)

### 1.1 Ir a Render
```
1. Ve a: https://render.com
2. Click en "Get Started"
```

### 1.2 Registrarte
```
Click en "GitHub" para registrarte con GitHub
(Más fácil para despliegue automático)
```

### 1.3 Autorizar Render
```
GitHub pedirá permiso para Render
Click en "Authorize Render"
```

✅ **Cuenta creada**

---

## PASO 2: Crear Base de Datos PostgreSQL (1 minuto)

### 2.1 Nuevo PostgreSQL
```
1. En el dashboard, click en "New +"
2. Selecciona "PostgreSQL"
```

### 2.2 Configurar
```
Name: pern-database
Database: PERN
User: postgres
Region: Oregon (US West) - El más cercano gratis

⚠️ IMPORTANTE: Selecciona el plan "Free"
(Tiene límites pero suficiente para desarrollo)

Click en "Create Database"
```

### 2.3 Esperar
```
Tarda ~2-3 minutos en aprovisionarse
Espera hasta que diga "Available"
```

### 2.4 Copiar credenciales
```
1. Click en tu base de datos recién creada
2. Busca "Internal Database URL"
3. Cópiala (la necesitarás después)
   Ejemplo: postgresql://postgres:xxx@xxx.oregon-postgres.render.com/PERN
```

✅ **Base de datos creada**

---

## PASO 3: Inicializar tablas (con DBeaver)

### 3.1 Descargar DBeaver
```
Si no lo tienes: https://dbeaver.io/download/
```

### 3.2 Conectar a Render
```
1. En Render, ve a tu base de datos
2. Copia las credenciales:
   - Hostname
   - Port
   - Database
   - Username
   - Password

3. En DBeaver: Nueva Conexión → PostgreSQL
4. Pega las credenciales
5. Test Connection → OK
```

### 3.3 Ejecutar script
```
1. DBeaver → SQL Editor → New Script
2. Abre: database/init.sql
3. Copia todo el contenido
4. Pégalo en DBeaver
5. Execute (▶️)
```

✅ **Tablas creadas**

---

## PASO 4: Desplegar BACKEND (3 minutos)

### 4.1 Nuevo Web Service
```
1. Dashboard → "New +" → "Web Service"
2. "Connect a repository"
3. Busca tu repo: "pern-stack-tareas"
4. Click "Connect"
```

### 4.2 Configurar el backend

```
Name: pern-backend
Region: Oregon (US West)
Branch: main
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: node index.js

⚠️ IMPORTANTE: Plan "Free"
```

### 4.3 Variables de Entorno

Click en "Advanced" → "Add Environment Variable"

```
PORT = 3000

PG_HOST = (copia desde Render: Hostname de tu DB)
PG_PORT = (copia desde Render: Port de tu DB)
PG_USER = (copia desde Render: Username de tu DB)
PG_PASSWORD = (copia desde Render: Password de tu DB)
PG_DATABASE = PERN

JWT_SECRET = mi_secreto_super_seguro_123

ORIGIN = https://tu-frontend.onrender.com
(⚠️ Déjalo así por ahora, lo cambiaremos)
```

**Tip:** También puedes pegar directamente la "Internal Database URL":
```
DATABASE_URL = postgresql://postgres:xxx@xxx.oregon-postgres.render.com/PERN
```
(Y luego modificar tu código para usar DATABASE_URL en lugar de las variables separadas)

### 4.4 Crear Web Service
```
Click en "Create Web Service"
Espera 3-5 minutos mientras despliega
```

### 4.5 Copiar URL
```
Una vez desplegado, verás la URL:
https://pern-backend-xxxx.onrender.com

🔥 CÓPIALA (la necesitas para el frontend)
```

✅ **Backend desplegado**

---

## PASO 5: Desplegar FRONTEND (3 minutos)

### 5.1 Nuevo Static Site
```
1. Dashboard → "New +" → "Static Site"
2. Conecta el MISMO repositorio
```

### 5.2 Configurar

```
Name: pern-frontend
Branch: main
Root Directory: frontend
Build Command: npm run build
Publish Directory: dist

⚠️ Plan "Free"
```

### 5.3 Variables de Entorno

```
VITE_BACKEND = https://pern-backend-xxxx.onrender.com
(Usa la URL que copiaste del backend)
```

### 5.4 Crear Static Site
```
Click en "Create Static Site"
Espera 2-3 minutos
```

### 5.5 Copiar URL del frontend
```
URL: https://pern-frontend-xxxx.onrender.com
🔥 CÓPIALA
```

### 5.6 Actualizar CORS en backend

```
1. Ve al servicio "pern-backend"
2. Click en "Environment"
3. Edita la variable ORIGIN:
   ORIGIN = https://pern-frontend-xxxx.onrender.com
4. Guarda
5. Render automáticamente redesplega
```

✅ **Frontend desplegado y conectado**

---

## PASO 6: ¡PROBAR! 🎉

### 6.1 Abrir tu app
```
Ve a: https://pern-frontend-xxxx.onrender.com
```

### 6.2 Primera visita (importante)
```
⚠️ El servicio gratis se "duerme" después de 15 minutos de inactividad
Primera carga puede tardar 30-60 segundos
Después es normal
```

### 6.3 Probar funcionalidades
```
1. Registrar usuario
2. Iniciar sesión
3. Crear tarea
4. Ver tareas
```

✅ **¡TODO FUNCIONA!**

---

## 📊 Limitaciones del Plan Gratuito de Render

### Base de Datos (PostgreSQL Free)
- **90 días de vida** (después se borra)
- **1 GB de almacenamiento**
- **97 horas de "uptime" al mes** (3.25 horas/día)
- Se duerme después de 15 minutos de inactividad

**Para proyectos escolares:** Suficiente
**Para proyectos serios:** Considera Railway o el plan pago de Render

### Web Services (Backend/Frontend Free)
- **750 horas al mes** por servicio
- Se duermen después de **15 minutos** de inactividad
- Primer request después de dormir: **30-60 segundos**
- Bandwidth: **100 GB/mes**

---

## 🐛 Solución de Problemas

### "Tarda mucho en cargar"
```
→ Es normal en el plan gratuito
→ El servicio se durmió, espera 30-60 segundos
→ Después cargará normal
```

### "Cannot connect to database"
```
1. Ve a tu PostgreSQL en Render
2. Verifica que esté "Available"
3. Revisa que las credenciales en el backend sean correctas
```

### "CORS error"
```
1. Verifica que ORIGIN tenga la URL correcta del frontend
2. Debe ser HTTPS, no HTTP
3. Sin "/" al final
```

---

## 🔄 Redesplegar después de cambios

```bash
# En tu computadora:
git add .
git commit -m "feat: cambios"
git push origin main

# Render automáticamente redespliega
# Backend: 3-5 minutos
# Frontend: 2-3 minutos
```

---

## 📈 Comparación Visual

### Render (Gratis)
```
✅ 100% gratuito para siempre
✅ Despliegue automático desde GitHub
✅ PostgreSQL incluido
❌ Se duerme después de 15 minutos
❌ Primera carga lenta (30-60s)
❌ Base de datos se borra después de 90 días
```

### Railway ($5/mes gratis)
```
✅ Más rápido
✅ No se duerme tan rápido
✅ Base de datos permanente
❌ Crédito mensual limitado ($5)
❌ Puede acabarse el crédito
```

---

## ✅ Checklist Final

- [ ] Cuenta de Render creada
- [ ] PostgreSQL creado
- [ ] Tablas inicializadas con DBeaver
- [ ] Backend desplegado con variables configuradas
- [ ] Frontend desplegado con VITE_BACKEND configurado
- [ ] ORIGIN del backend actualizado
- [ ] Puedo registrarme e iniciar sesión
- [ ] Puedo crear tareas

---

## 🎉 ¡Listo!

Tu app está en producción y **100% gratis**.

**URLs:**
- 🌐 Frontend: https://pern-frontend-xxxx.onrender.com
- 🔧 Backend: https://pern-backend-xxxx.onrender.com
- 🗄️ Database: xxx.oregon-postgres.render.com

---

## 💡 Tip Final

Si quieres que tu app NO se duerma:
1. Usa un servicio como [cron-job.org](https://cron-job.org)
2. Configura un ping cada 10 minutos a tu backend
3. Así siempre estará "despierto"

```
URL a pingear: https://pern-backend-xxxx.onrender.com/api/ping
Frecuencia: Cada 10 minutos
```

---

**Render es perfecto para proyectos escolares y de práctica** 🎓