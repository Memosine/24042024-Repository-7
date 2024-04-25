const {Repository } = require('./metodo.js');

describe('Repository', function() {
  let repository;

  beforeEach(function() {
      repository = new Repository();
  });

  it('debería inicializar correctamente', function() {
      expect(repository.activities).toEqual([]);
      expect(repository.contador).toBe(1);
  });

  it('debería agregar una actividad correctamente', function() {
      const activity = {
          seccion: 'Test Sección',
          titulo: 'Test Título',
          contenido: 'Test Contenido',
          urlImg: 'https://test.com/image.jpg',
          otraSeccion: 'Test Otra Sección'
      };

      const result = repository.createActivity(activity);

      expect(result).toBe('Tu actividad fue creada con éxito');
      expect(repository.activities.length).toBe(1);
      expect(repository.activities[0]).toEqual({
          ...activity,
          id: 1
      });
  });

  it('debería eliminar una actividad correctamente', function() {
      const activity = {
          seccion: 'Test Sección',
          titulo: 'Test Título',
          contenido: 'Test Contenido',
          urlImg: 'https://test.com/image.jpg',
          otraSeccion: 'Test Otra Sección'
      };

      repository.createActivity(activity);

      const result = repository.deleteActivity(1);

      expect(result).toBe('Tu actividad fue eliminada con éxito');
      expect(repository.activities.length).toBe(0);
  });
});
