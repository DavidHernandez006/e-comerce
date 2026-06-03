# 🚀 Guía de Git y GitHub

## **Requisitos**
- Instala Git: https://git-scm.com/downloads
- Crea cuenta en GitHub: https://github.com
- Editor: Visual Studio Code https://code.visualstudio.com/

---

## **Caso 1: Descargar el Proyecto (Primera Vez)**

```bash
cd Desktop
git clone https://github.com/DavidHernandez006/e-comerce.git
cd e-comerce
code .
```

---

## **Caso 2: Descargar Cambios Nuevos**

```bash
git pull origin main
```

---

## **Caso 3: Crear/Editar Archivo**

1. Crea o edita el archivo en tu editor
2. Guarda (Ctrl + S)
3. En terminal:

```bash
git status
git add .
git commit -m "feat: Tu descripción"
git push origin main
```

---

## **Caso 4: Eliminar Archivo**

```bash
git add .
git commit -m "chore: Eliminar archivo"
git push origin main
```

---

## **Caso 5: Crear Rama Nueva**

```bash
git checkout -b feature/nombre-funcion
git add .
git commit -m "feat: Descripción"
git push origin feature/nombre-funcion
```

Luego abre Pull Request en GitHub y haz merge.

---

## **Caso 6: Resolver Conflictos**

```bash
git pull origin main
```

Abre el archivo, busca `<<<<<<< HEAD` y `>>>>>>> main`, elige qué código mantener, guarda:

```bash
git add .
git commit -m "fix: Resolver conflicto"
git push origin main
```

---

## **Comandos Rápidos**

| Acción | Comando |
|--------|---------|
| Descargar proyecto | `git clone URL` |
| Descargar cambios | `git pull origin main` |
| Ver cambios | `git status` |
| Agregar cambios | `git add .` |
| Guardar cambios | `git commit -m "mensaje"` |
| Subir a GitHub | `git push origin main` |
| Ver historial | `git log` |

---

## **Errores Comunes**

| Error | Solución |
|-------|----------|
| "not a git repository" | `cd ruta/a/proyecto/e-comerce` |
| "Please tell me who you are" | `git config --global user.name "Nombre"` y `git config --global user.email "email@example.com"` |
| "Your branch is behind" | `git pull origin main` |

---

## **Prefijos de Commits**

- `feat:` = Nueva característica
- `fix:` = Arreglar error
- `docs:` = Documentación
- `style:` = Cambios en CSS
- `refactor:` = Mejorar código
- `chore:` = Tarea administrativa

**Ejemplos:**
```bash
git commit -m "feat: Crear página de login"
git commit -m "fix: Arreglar bug del carrito"
git commit -m "style: Cambiar colores de botones"
```

---

## **Flujo Básico (Lo Más Importante)**

```bash
# 1. Descargar cambios
git pull origin main

# 2. Editar tu archivo en el editor

# 3. Subir cambios
git add .
git commit -m "feat: Descripción clara"
git push origin main
```


