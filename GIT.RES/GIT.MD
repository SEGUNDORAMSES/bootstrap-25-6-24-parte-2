Crear y cambiar a la nueva rama:

git branch

git checkout -b nombre-nueva-rama nombre-rama-existente
Verificar el estado del repositorio:

git status
Añadir los cambios al área de preparación:

git add .
Verificar el estado del repositorio nuevamente:

git status
Hacer el commit con un mensaje descriptivo:

git commit -m "Proyecto base"
Publicar la nueva rama en el repositorio remoto:

git push --set-upstream origin nombre-nueva-rama
El primer push con --set-upstream establece el repositorio remoto y la rama para futuros push.

Publicamos la rama origin/nombre-nueva-rama una única vez, ya que el repositorio remoto y la rama se especifican en la primera vez.

Para próximos cambios:
Verificar el estado del repositorio:

git status
Añadir los cambios al área de preparación:

git add .
Verificar el estado del repositorio nuevamente:

git status
Hacer el commit con un mensaje descriptivo:

git commit -m "Descripción de los nuevos cambios"
Hacer el push de los cambios al repositorio remoto:

git push
Después de hacer el primer push con la opción --set-upstream, podrás usar simplemente git push para futuros cambios en la misma rama