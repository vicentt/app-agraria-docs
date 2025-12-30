# ANEXO IV - GESTIÓN DE SOLICITUDES DE CAMBIO (CR)
## Proyecto AGRARIA - Agricultural Services Management Platform

**Versión:** 1.0
**Fecha:** Octubre 2025

---

## 1. OBJETO

El presente Anexo establece el procedimiento para la gestión de Solicitudes de Cambio (Change Request o CR) que impliquen modificaciones respecto al alcance inicial definido en el Anexo I (Análisis Funcional).

---

## 2. DEFINICIONES

### 2.1 Solicitud de Cambio (CR)
Documento o comunicación formal mediante la cual el Cliente solicita modificaciones respecto al alcance inicial del proyecto.

### 2.2 Tipos de Cambio

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Funcional** | Nueva funcionalidad no contemplada | Añadir chat entre usuarios, integrar pasarela de pago |
| **Modificación** | Cambio sustancial a funcionalidad existente | Cambiar flujo de 5 pasos a 10 pasos, añadir roles adicionales |
| **Técnico** | Cambio en tecnología o arquitectura | Cambiar de PostgreSQL a MongoDB, añadir microservicios |
| **Alcance** | Ampliación del alcance original | Añadir versión web completa, soporte para más idiomas |

### 2.3 Lo que NO es un CR

- Corrección de bugs o errores del desarrollo
- Ajustes menores de UX dentro de lo especificado
- Optimizaciones de rendimiento acordadas
- Aclaraciones sobre funcionalidades ya definidas

---

## 3. PROCESO DE GESTIÓN

### 3.1 Diagrama del Proceso

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  SOLICITUD  │───▶│  ANÁLISIS   │───▶│  DECISIÓN   │───▶│  EJECUCIÓN  │
│   Cliente   │    │ Proveedor   │    │   Cliente   │    │  Proveedor  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
     1 día           3-5 días           5 días max         Según CR
```

### 3.2 Fases Detalladas

#### FASE 1: Solicitud (Cliente)
**Plazo:** Inmediato

El Cliente comunica la solicitud incluyendo:
- Descripción del cambio solicitado
- Motivo o necesidad
- Prioridad deseada (Alta / Media / Baja)
- Fecha deseada de implementación (si aplica)

**Formato:** Email o documento escrito dirigido al responsable del proyecto.

---

#### FASE 2: Análisis (Proveedor)
**Plazo:** 3-5 días laborables

El Proveedor analiza la solicitud y elabora una valoración que incluye:

| Elemento | Descripción |
|----------|-------------|
| **Viabilidad técnica** | ¿Es posible implementarlo? |
| **Impacto en alcance** | Qué funcionalidades afecta |
| **Impacto en plazos** | Días/semanas adicionales necesarios |
| **Impacto en coste** | Presupuesto adicional requerido |
| **Riesgos** | Posibles complicaciones |
| **Alternativas** | Opciones más simples si las hay |

---

#### FASE 3: Decisión (Cliente)
**Plazo:** 5 días laborables máximo

El Cliente revisa la valoración y decide:

| Decisión | Acción |
|----------|--------|
| **Aprobar** | Se firma adenda y se procede |
| **Rechazar** | Se continúa con alcance original |
| **Modificar** | Se ajusta la solicitud y vuelve a Fase 2 |
| **Posponer** | Se documenta para futuras versiones |

---

#### FASE 4: Ejecución (si aprobado)
**Plazo:** Según valoración

- Se firma adenda al contrato
- Se actualiza cronograma si procede
- Se ejecuta el cambio
- Se valida con el Cliente

---

## 4. PLANTILLA DE SOLICITUD DE CAMBIO

```
═══════════════════════════════════════════════════════════
                 SOLICITUD DE CAMBIO (CR)
               Proyecto AGRARIA - CR-[NNN]
═══════════════════════════════════════════════════════════

DATOS GENERALES
───────────────────────────────────────────────────────────
Fecha de solicitud:    [DD/MM/YYYY]
Solicitante:           [Nombre]
Prioridad:             [ ] Alta  [ ] Media  [ ] Baja

DESCRIPCIÓN DEL CAMBIO
───────────────────────────────────────────────────────────
[Describir qué se quiere cambiar o añadir]


MOTIVO / JUSTIFICACIÓN
───────────────────────────────────────────────────────────
[Por qué es necesario este cambio]


FECHA DESEADA
───────────────────────────────────────────────────────────
[Si aplica, cuándo se necesita implementado]


═══════════════════════════════════════════════════════════
          VALORACIÓN DEL PROVEEDOR (uso interno)
═══════════════════════════════════════════════════════════

Fecha valoración:      [DD/MM/YYYY]
Viabilidad:            [ ] Sí  [ ] No  [ ] Con condiciones

Impacto en plazos:     [X semanas adicionales / Sin impacto]
Impacto en coste:      [X € adicionales / Sin impacto]

Descripción técnica:
[Qué implica técnicamente este cambio]

Riesgos identificados:
[Posibles complicaciones]

Alternativas propuestas:
[Opciones más simples si las hay]


═══════════════════════════════════════════════════════════
                      DECISIÓN
═══════════════════════════════════════════════════════════

[ ] APROBADO     [ ] RECHAZADO     [ ] POSPUESTO

Fecha decisión:        [DD/MM/YYYY]
Firma Cliente:         ____________________
Firma Proveedor:       ____________________

Observaciones:
[Comentarios adicionales]

═══════════════════════════════════════════════════════════
```

---

## 5. IMPACTO EN PLAZOS Y COSTES

### 5.1 Criterios de Valoración

| Tamaño del CR | Tiempo estimado | Impacto típico en coste |
|---------------|-----------------|-------------------------|
| **Pequeño** | 1-3 días | 200€ - 500€ |
| **Mediano** | 1-2 semanas | 500€ - 1.500€ |
| **Grande** | 2-4 semanas | 1.500€ - 4.000€ |
| **Muy grande** | > 1 mes | A valorar individualmente |

### 5.2 Reglas de Aplicación

1. **Los CR aprobados extienden automáticamente los plazos** en el tiempo necesario para su implementación.

2. **Los costes adicionales** se facturan según los hitos acordados en la adenda correspondiente.

3. **Múltiples CR pequeños** pueden agruparse en una única adenda para simplificar la gestión.

4. **CR urgentes** (implementación en < 1 semana) pueden tener un recargo del 25% por alteración de planificación.

---

## 6. ADENDA AL CONTRATO

Toda CR aprobada que implique modificación de plazos o costes requiere la firma de una adenda que incluirá:

1. Referencia al CR aprobado (CR-NNN)
2. Descripción resumida del cambio
3. Nuevo plazo de entrega (si aplica)
4. Coste adicional (si aplica)
5. Forma de pago del coste adicional
6. Firma de ambas partes

---

## 7. REGISTRO DE CAMBIOS

Se mantendrá un registro actualizado de todas las CR del proyecto:

| CR | Fecha | Descripción | Estado | Impacto |
|----|-------|-------------|--------|---------|
| CR-001 | - | - | - | - |

---

## 8. COMUNICACIONES

### 8.1 Canales Válidos
- Email al responsable del proyecto
- Documento formal firmado

### 8.2 Canales NO Válidos para CR
- Mensajes de WhatsApp o similar
- Conversaciones telefónicas no documentadas
- Comentarios en reuniones no formalizados por escrito

**Nota:** Las solicitudes verbales o informales no se considerarán CR válidas hasta que se formalicen por los canales establecidos.

---

## 9. EXCEPCIONES

### 9.1 Cambios Sin Coste Adicional

No generarán coste adicional:
- Ajustes menores de textos o copys
- Cambios de colores dentro de la paleta aprobada
- Reordenación de elementos dentro de una pantalla
- Corrección de errores del desarrollo

### 9.2 Cambios Bloqueantes

Si un CR es imprescindible para continuar el desarrollo y el Cliente demora su decisión más de 10 días laborables, el Proveedor podrá:
- Pausar el desarrollo afectado
- Ajustar el cronograma acordemente
- Facturar según lo completado hasta la fecha

---

**Última actualización:** Octubre 2025

---

© 2025 CODELIO S.L. - Proyecto AGRARIA
