import review_data from '../data/review.json' assert {type: "json"}

const i_reviewnganh = (agent) => {

    let text = agent.query
    let intent = agent.intent
    let parameters = agent.parameters

    try {
        agent.add(review_data[parameters.e_manganh].review)
    }
    catch {
        agent.add(`Xin lỗi, hiện tại ngành ${review_data[parameters.e_manganh].tenganh} vãn chưa có thông tin review`)
    }

}

export {
    i_reviewnganh
}