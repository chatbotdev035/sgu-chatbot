import review_data from '../data/review.json'

const i_nganhdaotao = (agent) => {

    let text = agent.query
    let intent = agent.intent
    let parameters = agent.parameters

    try {
        agent.add('Hiện tại trường đào tạo những ngành sau đây:')
        let index = 1;
        for (let key of Object.keys(review_data)) {
            agent.add(`${index}. ${review_data[key].tenganh}`)
            index++
        }
    }
    catch {
        agent.add("Xin lỗi, hiện tại chưa có câu trả lời dành cho câu hỏi của bạn")
    }

}

export {
    i_nganhdaotao
}