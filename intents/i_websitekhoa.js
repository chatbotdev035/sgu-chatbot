import khoa_data from '../data/khoa.json' assert {type: "json"}

const i_websitekhoa = (agent) => {

    let text = agent.query
    let intent = agent.intent
    let parameters = agent.parameters

    try {
        agent.add(`Website của ${parameters.e_tenkhoa} là:`)
        agent.add(khoa_data[parameters.e_tenkhoa].website)
    }
    catch {
        agent.add("Xin lỗi, hiện tại chưa có câu trả lời dành cho câu hỏi của bạn")
    }

}

export {
    i_websitekhoa
}