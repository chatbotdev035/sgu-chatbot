const GR1 = ["DKE", "DQK", "DKQ", "DTN", "DTL", "DQG", "DKV(DTT)", "DQV", "DLU"]
const GR2 = ["DKP", "DNA", "DDV", "DDT", "DCV", "DDD", "DDE", "DCT", "DCM", "DKM", "DTU", "DAN", "DQT", "DVI"]

import review_data from '../data/review.json' assert {type: "json"}

const i_hocphi = (agent) => {

    let text = agent.query
    let intent = agent.intent
    let parameters = agent.parameters
    try {
        if (GR1.includes(parameters.e_manganh)) {

            agent.add(`Hiện tại học phí ngành "${review_data[parameters.e_manganh].tenganh}" là: `)
            agent.add(['K17: 239.000 VNĐ/tín chỉ.',
                'K18: 263.000 VNĐ/tín chỉ.',
                '  K19: 289.000 VNĐ/tín chỉ.',
                'Mỗi năm học phí thường tăng khoảng 10% cho 1 tín chỉ'
            ])
        }
        else if (GR2.includes(parameters.e_manganh)) {
            if (parameters.e_manganh === 'DCT') {
                agent.add(`Chương trình chất lượng cao ngành CNTT là 32.670.000đ/sinh viên/năm học.`)
            }
            agent.add(`Hiện tại học phí ngành "${review_data[parameters.e_manganh].tenganh}" là: `)
            agent.add(['K17: 289.000 VNĐ/tín chỉ.',
                'K18: 313.000 VNĐ/tín chỉ.',
                '  K19: 345.000 VNĐ/tín chỉ.',
                'Mỗi năm học phí thường tăng khoảng 10% cho 1 tín chỉ'
            ])
        }
        else {
            agent.add(`Hiện tại ngành "${review_data[parameters.e_manganh].tenganh}" không thu học phí do thuộc nhóm ngành sư phạm`)
        }
    }

    catch {
        agent.add("Bạn có thể tham khảo thông tin học phí ở đây nhe: https://truongvietnam.net/hoc-phi-dh-sai-gon/")
    }

}

export {
    i_hocphi
}
