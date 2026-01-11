# 🔍 REPORTE DETALLADO: Franjas Grises Laterales en Safari Móvil (iPhone)

## 📋 RESUMEN EJECUTIVO

**Problema:** Franjas grises laterales visibles SOLO en Safari móvil (iPhone)  
**Causa Raíz Identificada:** Múltiples conflictos de layout y viewport en Safari iOS  
**Prioridad:** CRÍTICA

---

## 🚨 PROBLEMAS CRÍTICOS ENCONTRADOS

### 1. **LAYOUT.TSX - Falta de contenedor wrapper con overflow-x-hidden**

**Archivo:** `src/app/layout.tsx`  
**Línea:** 161  
**Problema:**
```tsx
<main className="flex-1">{children}</main>
```

**Análisis:**
- El `<main>` NO tiene `overflow-x-hidden` ni `w-full`
- Los hijos pueden desbordarse sin restricción
- En Safari iOS, esto causa que el contenido se extienda más allá del viewport

**Solución Requerida:**
```tsx
<main className="flex-1 w-full overflow-x-hidden">{children}</main>
```

---

### 2. **HERO.TSX - Padding izquierdo excesivo en móvil**

**Archivo:** `src/components/blocks/hero.tsx`  
**Línea:** 44  
**Problema:**
```tsx
className="container ... md:pl-[150px] md:pr-6 ..."
```

**Análisis:**
- `md:pl-[150px]` aplica padding-left de 150px desde 768px
- En tablets pequeñas (768px-1024px), esto puede causar desbordamiento
- El contenedor tiene `container` que ya añade padding-inline: 1.5rem
- **CONFLICTO:** `container` + `px-4` + `md:pl-[150px]` = padding acumulado excesivo

**Solución Requerida:**
```tsx
// Cambiar md:pl-[150px] por lg:pl-[150px] para aplicar solo en desktop grande
className="container ... lg:pl-[150px] lg:pr-6 ..."
```

---

### 3. **HERO.TSX - Margin negativo en imagen móvil**

**Archivo:** `src/components/blocks/hero.tsx`  
**Línea:** 113  
**Problema:**
```tsx
className="mt-12 max-lg:ml-6 ..."
```

**Análisis:**
- `max-lg:ml-6` añade margin-left solo en móvil
- Esto puede causar que la imagen se desplace fuera del viewport
- En Safari iOS, los márgenes negativos o laterales pueden crear espacio gris

**Solución Requerida:**
```tsx
// Eliminar max-lg:ml-6 o cambiarlo por padding del contenedor padre
className="mt-12 max-lg:px-6 md:mt-20 lg:container lg:mt-24"
```

---

### 4. **NAVBAR.TSX - Conflicto entre left-4 right-4 y w-full**

**Archivo:** `src/components/blocks/navbar.tsx`  
**Líneas:** 50-52  
**Problema:**
```tsx
"fixed top-6 z-50 transition-all duration-300",
"left-4 right-4 mx-auto", 
"w-full max-w-2xl"
```

**Análisis:**
- `left-4 right-4` + `w-full` = CONFLICTO
- `left-4 right-4` establece posicionamiento absoluto desde los bordes
- `w-full` intenta ocupar 100% del ancho
- `mx-auto` no funciona con `left-4 right-4` (position fixed)
- **En Safari iOS:** Esto puede causar que el navbar se extienda más allá del viewport

**Solución Requerida:**
```tsx
// Opción 1: Usar solo left-4 right-4 (recomendado)
"fixed top-6 z-50 transition-all duration-300",
"left-4 right-4", 
"max-w-2xl mx-auto"

// Opción 2: Usar solo w-full con padding
"fixed top-6 z-50 transition-all duration-300",
"left-0 right-0 px-4", 
"max-w-2xl mx-auto"
```

---

### 5. **NAVBAR.TSX - Menú móvil con left-0 right-0 sin restricción**

**Archivo:** `src/components/blocks/navbar.tsx`  
**Línea:** 100  
**Problema:**
```tsx
className="absolute left-0 right-0 top-full mt-2 ..."
```

**Análisis:**
- `left-0 right-0` hace que el menú ocupe todo el ancho del viewport
- Pero el padre (`header`) tiene `left-4 right-4`, creando desalineación
- En Safari iOS, esto puede causar que el menú se extienda más allá del navbar

**Solución Requerida:**
```tsx
className="absolute left-0 right-0 top-full mt-2 rounded-2xl border bg-background/95 p-4 shadow-xl backdrop-blur-md md:hidden max-w-full overflow-hidden"
```

---

### 6. **GLOBALS.CSS - Conflicto entre height: 100% y min-height: 100vh**

**Archivo:** `src/styles/globals.css`  
**Líneas:** 192-208  
**Problema:**
```css
html, body {
  height: 100%;
  ...
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ...
}
```

**Análisis:**
- `height: 100%` en html/body puede causar problemas en Safari iOS
- `min-height: 100vh` en body es redundante con `height: 100%`
- En Safari iOS, `100vh` incluye la barra de navegación del navegador, causando scroll
- **CONFLICTO:** `height: 100%` vs `min-height: 100vh`

**Solución Requerida:**
```css
html, body {
  /* Eliminar height: 100% */
  margin: 0;
  padding: 0;
  background-color: white !important;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available; /* Fix Safari iOS */
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
}
```

---

### 7. **HERO.TSX - Container con padding acumulado**

**Archivo:** `src/components/blocks/hero.tsx`  
**Línea:** 44  
**Problema:**
```tsx
className="container ... w-full px-4 sm:px-6 ..."
```

**Análisis:**
- La clase `container` ya tiene `padding-inline: 1.5rem` (24px)
- Añadir `px-4` (16px) crea padding acumulado de 40px
- En móviles pequeños, esto reduce demasiado el espacio disponible
- Puede causar que el contenido se comprima y aparezcan espacios grises

**Solución Requerida:**
```tsx
// Eliminar px-4 del contenedor, dejar solo container
className="container flex flex-col justify-center items-center gap-8 md:gap-14 lg:flex-row lg:gap-[60px] lg:pl-[150px] lg:pr-6 mt-[60px]"
```

---

### 8. **BACKGROUND.TSX - left-0 right-0 con relative puede causar problemas**

**Archivo:** `src/components/background.tsx`  
**Línea:** 19  
**Problema:**
```tsx
"relative w-full left-0 right-0",
```

**Análisis:**
- `left-0 right-0` con `position: relative` no tiene efecto real
- `w-full` ya ocupa el 100% del ancho
- Redundante pero no problemático
- Sin embargo, si el padre tiene restricciones, puede causar desbordamiento

**Solución Requerida:**
```tsx
// Simplificar a solo w-full
"relative w-full",
```

---

## ⚠️ PROBLEMAS MENORES

### 9. **NAVBAR.TSX - Margin negativo en botón hamburguesa**

**Archivo:** `src/components/blocks/navbar.tsx`  
**Línea:** 86  
**Problema:**
```tsx
className="md:hidden p-2 -mr-2"
```

**Análisis:**
- `-mr-2` puede causar que el botón se salga del contenedor
- En Safari iOS, márgenes negativos pueden crear espacios inesperados

**Solución Requerida:**
```tsx
className="md:hidden p-2"
```

---

### 10. **VIEWPORT CONFIG - viewportFit: 'cover' puede causar problemas**

**Archivo:** `src/app/layout.tsx`  
**Línea:** 134  
**Problema:**
```tsx
viewportFit: 'cover',
```

**Análisis:**
- `viewportFit: 'cover'` hace que el contenido se extienda hasta los bordes del dispositivo
- En iPhone con notch, esto puede causar que el contenido se oculte detrás del notch
- Puede crear espacios grises si no se maneja correctamente

**Solución Requerida:**
```tsx
viewportFit: 'contain', // O eliminar esta propiedad
```

---

## 🎯 CAUSA RAÍZ IDENTIFICADA

**PRINCIPAL CULPABLE:** Safari iOS maneja el viewport de manera diferente:

1. **`100vh` incluye la barra de navegación del navegador** - Causa scroll vertical
2. **Márgenes y padding acumulados** - El `container` + padding adicional crea espacios
3. **`left-4 right-4` + `w-full`** - Conflicto en navbar que extiende el contenido
4. **Falta de `overflow-x-hidden` en main** - Permite desbordamiento horizontal

---

## ✅ SOLUCIONES PRIORIZADAS

### PRIORIDAD 1 (CRÍTICA):
1. ✅ Añadir `overflow-x-hidden` y `w-full` al `<main>` en layout.tsx
2. ✅ Corregir conflicto `left-4 right-4` + `w-full` en navbar.tsx
3. ✅ Cambiar `md:pl-[150px]` por `lg:pl-[150px]` en hero.tsx
4. ✅ Eliminar `max-lg:ml-6` de la imagen en hero.tsx

### PRIORIDAD 2 (ALTA):
5. ✅ Simplificar padding en hero.tsx (eliminar px-4 redundante)
6. ✅ Corregir `height: 100%` vs `min-height: 100vh` en globals.css
7. ✅ Añadir `-webkit-fill-available` para Safari iOS

### PRIORIDAD 3 (MEDIA):
8. ✅ Simplificar background.tsx (eliminar left-0 right-0 redundante)
9. ✅ Eliminar `-mr-2` del botón hamburguesa
10. ✅ Cambiar `viewportFit: 'cover'` a `'contain'`

---

## 📝 NOTAS ADICIONALES

- **Safari iOS es más estricto** con el viewport que otros navegadores
- **Los márgenes negativos** pueden causar problemas de renderizado
- **El padding acumulado** es un problema común en layouts responsivos
- **`100vh` en iOS** incluye la barra del navegador, usar `-webkit-fill-available`

---

## 🔧 PRÓXIMOS PASOS

1. Aplicar las soluciones de PRIORIDAD 1 inmediatamente
2. Probar en Safari iOS real (no solo simulador)
3. Verificar que no haya scroll horizontal
4. Aplicar soluciones de PRIORIDAD 2 si persisten problemas
5. Ajustar soluciones de PRIORIDAD 3 según necesidad

---

**Generado:** $(date)  
**Analista:** Composer AI  
**Estado:** Pendiente de implementación
