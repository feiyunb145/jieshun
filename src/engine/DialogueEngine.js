class DialogueEngine {
  constructor(gameData) {
    this.data = gameData
    this.state = { ...gameData.state, negotiationLog: [] }
    this.currentNodeId = 'cover'
    this.history = []
  }

  getCurrentNode() {
    return this.data.nodes[this.currentNodeId]
  }

  selectChoice(choiceId) {
    const node = this.getCurrentNode()
    if (!node || !node.choices) return null
    const choice = node.choices.find(c => c.id === choiceId)
    if (!choice) return null
    if (choice.effect) {
      this.applyEffect(choice.effect)
    }
    this.logChoice(choiceId, choice.type, choice.label)
    this.currentNodeId = choice.responseNode
    return this.getCurrentNode()
  }

  advance() {
    const node = this.getCurrentNode()
    if (node.nextNode) {
      this.currentNodeId = node.nextNode
      return this.getCurrentNode()
    }
    return null
  }

  reset() {
    this.state = { ...this.data.state, negotiationLog: [] }
    this.currentNodeId = 'cover'
    this.history = []
  }

  applyEffect(effect) {
    if (effect.type === 'incrementCounter') {
      this.state[effect.key] = (this.state[effect.key] || 0) + 1
    }
  }

  logChoice(choiceId, choiceType, choiceLabel) {
    this.state.negotiationLog.push({
      nodeId: this.currentNodeId,
      choiceId,
      choiceType,
      choiceLabel,
      timestamp: Date.now()
    })
    this.history.push(choiceId)
  }
}

export default DialogueEngine
