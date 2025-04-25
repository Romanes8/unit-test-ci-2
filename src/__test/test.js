import { sortHealth } from '../index.js'

describe('Проверка sortHealth', () => {
    test('должна отсортировать персонажей по убыванию здоровья', () => {
        const characters = [
          { name: 'мечник', health: 10 },
          { name: 'маг', health: 100 },
          { name: 'лучник', health: 80 },
        ];
    
        const result = sortHealth([...characters]); // создаем копию, чтобы не менять оригинал
    
        expect(result).toEqual([
          { name: 'маг', health: 100 },
          { name: 'лучник', health: 80 },
          { name: 'мечник', health: 10 },
        ]);
      });

      test('должна оставить массив пустым, если он пустой', () => {
        const characters = [];
        const result = sortHealth([...characters]);
        expect(result).toEqual([]);
      });

      test('должна корректно сортировать при одинаковых значениях здоровья', () => {
        const characters = [
          { name: 'персонаж1', health: 50 },
          { name: 'персонаж2', health: 50 },
        ];
    
        const result = sortHealth([...characters]);
        expect(result).toEqual([
          { name: 'персонаж1', health: 50 },
          { name: 'персонаж2', health: 50 },
        ]);
      });
});