import review_data from '../data/review.json'

const i_diemchuan = (agent) => {

    let text = agent.query
    let intent = agent.intent
    let parameters = agent.parameters

    try {
        let year = 0
        if (parameters.e_nam === 'Năm ngoái') {
            year = Number(new Date().getFullYear() - 1)
        }
        else if (parameters.e_nam == '') {
            year = Number(0)
        }
        else {
            year = Number(parameters.e_nam)
        }

        let obj_diemchuan = review_data[parameters.e_manganh].diemchuan

        agent.add(`Thông tin điểm chuẩn ngành ${review_data[parameters.e_manganh].tenganh}`)

        if (obj_diemchuan.CLC === null) {
            if (year === 0) {
                for (let key of Object.keys(obj_diemchuan.daitra)) {
                    for (let item of obj_diemchuan.daitra[key]) {
                        agent.add(`Năm ${key} Tổ hợp: ${item.tohop} có điểm chuẩn là: ${item.diem}`)
                    }
                }
            }
            else {
                for (let item of obj_diemchuan.daitra[year]) {
                    agent.add(`Năm ${year} Tổ hợp: ${item.tohop} có điểm chuẩn là: ${item.diem}`)
                }
            }
        }
        else {
            if (year === 0) {
                agent.add('Thông tin hệ đại trà')
                for (let key of Object.keys(obj_diemchuan.daitra)) {
                    for (let item of obj_diemchuan.daitra[key]) {
                        agent.add(`Năm ${key} Tổ hợp: ${item.tohop} có điểm chuẩn là: ${item.diem}`)
                    }
                }
                agent.add('Thông tin hệ CLC')
                for (let key of Object.keys(obj_diemchuan.CLC)) {
                    for (let item of obj_diemchuan.CLC[key]) {
                        agent.add(`Năm ${key} Tổ hợp: ${item.tohop} có điểm chuẩn là: ${item.diem}`)
                    }
                }
            }
            else {
                agent.add('Thông tin hệ đại trà')
                for (let item of obj_diemchuan.daitra[year]) {
                    agent.add(`Năm ${year} Tổ hợp: ${item.tohop} có điểm chuẩn là: ${item.diem}`)
                }
                agent.add('Thông tin hệ CLC')
                for (let item of obj_diemchuan.CLC[year]) {
                    agent.add(`Năm ${year} Tổ hợp: ${item.tohop} có điểm chuẩn là: ${item.diem}`)
                }
            }
        }
    }
    catch {
        agent.add("Xin lỗi, hiện tại chưa có câu trả lời dành cho câu hỏi của bạn")
    }

}

export {
    i_diemchuan
}