export default function primaryId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}