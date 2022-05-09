import khoa_data from '../data/khoa.json' assert {type: "json"}

const i_vpk = (agent) => {

    let text = agent.query
    let intent = agent.intent
    let parameters = agent.parameters

    try {
        agent.add(`Văn phòng của ${parameters.e_tenkhoa} ở:`)
        agent.add(khoa_data[parameters.e_tenkhoa].vpk)
    }
    catch {
        agent.add("Xin lỗi, hiện tại chưa có câu trả lời dành cho câu hỏi của bạn")
    }

}

export {
    i_vpk
}