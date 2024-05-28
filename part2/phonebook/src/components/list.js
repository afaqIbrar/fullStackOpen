const Person = ({ person, deletePer }) => {
    return (
        <div>
            {person.name} {person.number} <button onClick={() => deletePer(person)}>delete</button>
        </div>
    )
}

const List = ({ persons, filter, deleterPerson }) => {
    return (
        persons.map(person => person.name.includes(filter) ? <Person key={person.id} deletePer={deleterPerson} person={person} /> : '')
    )
}
export default List