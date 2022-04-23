import diachicoso_data from '../data/diachicoso.json'
import diff from 'dialogflow-fulfillment'

const i_bandocoso = (agent) => {

    let text = agent.query
    let intent = agent.intent
    let parameters = agent.parameters

    // agent.add(review_data[parameters.e_tennganh])
    let payload = {
        "facebook": {
            "attachment": {
                "type": "image",
                "payload": {
                    "url": `${diachicoso_data[parameters.e_diachi]}`
                }
            }
        }


    }
    agent.add(new diff.Payload(agent.UNSPECIFIED, payload, { sendAsMessage: true, rawPayload: true }))

}

export {
    i_bandocoso
}