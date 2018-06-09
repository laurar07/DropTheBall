export const DROP_BALL = 'DROP_BALL'

export function dropBall(ball) {
    return {
        type: DROP_BALL,
        ball
    }
}