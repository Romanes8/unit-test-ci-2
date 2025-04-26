// Функция сортировки персонажей по уровню здоровья:
export function sortHealth(characters) {
    characters.sort((a,b) => b.health - a.health);
    return characters;
}


