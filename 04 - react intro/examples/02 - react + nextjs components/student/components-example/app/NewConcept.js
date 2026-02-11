export default function NewConcept({concept}) /* or just (props) */{
    // not a stcatic component, but a dynamic one that accepts props and renders them in the UI
    return (
        <div>
            <h3>New Concept Component</h3>
            <p>This component accepts props and renders them in the UI.</p>
            <p>Here is the value of the prop: {concept}</p>
        </div>
    )
}  
