export async function getTutors() {
    const res = await fetch('https://online-learning-json-server.vercel.app/tutors')
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export async function getTutorById(id) {
    const response = await fetch(`https://online-learning-json-server.vercel.app/tutors/${id}`);
    const tutor = await response.json();
    return tutor;
}

export async function getTestimonials() {
    const res = await fetch('https://online-learning-json-server.vercel.app/testimonials')
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
