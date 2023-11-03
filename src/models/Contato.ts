class Contato {
  isABoy: boolean
  name: string
  phone: string
  email: string
  id: number

  constructor(
    isABoy: boolean,
    name: string,
    phone: string,
    email: string,
    id: number
  ) {
    ;(this.isABoy = isABoy),
      (this.name = name),
      (this.phone = phone),
      (this.email = email),
      (this.id = id)
  }
}

export default Contato
