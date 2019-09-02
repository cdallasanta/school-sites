# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# setup SSD and several schools
ssd = District.create(name:"Seattle School District")
School.create(
  name:"Adams Elementary School",
  district: ssd,
  address: "6110 28th Ave NW Seattle, WA 98107",
  phone: "206-252-1300",
  homepage_url: "http://adamses.seattleschools.org/"
)

School.create(
  name:"Alki Elementary School",
  district: ssd,
  address: "3010  59th Ave SW Seattle, WA 98116",
  phone: "206-252-9050",
  homepage_url: "https://alkies.seattleschools.org/"
)

School.create(
  name: "Arbor Heights Elementary School",
  address: "3701 SW 104th Street, Seattle, WA 98146",
  phone: "206-252-9250",
  district: ssd,
  homepage_url: "https://arborheightses.seattleschools.org/"
)

School.create(
  name: "Daniel Bagley Elementary School",
  address: "7821 Stone Ave N Seattle, WA 98103",
  phone: "206-252-5110",
  district: ssd,
  homepage_url: "http://bagleyes.seattleschools.org/"
)

School.create(
  name: "Beacon Hill International Elementary School",
  address: "2025  14th Ave S Seattle, WA 98144",
  phone: "206-252-2700",
  district: ssd,
  homepage_url: "https://beaconhilles.seattleschools.org/"
)

School.create(
  name: "William Cullen Bryant Elementary School",
  address: "3311 NE 60th St Seattle, WA 98115",
  phone: "206-252-5200",
  district: ssd,
  homepage_url: "https://bryantes.seattleschools.org/"
)

School.create(
  name: "Cascadia Elementary School",
  address: "1700 N 90th St Seattle, WA 98103",
  phone: "206-413-2000",
  district: ssd,
  homepage_url: "http://cascadiaes.seattleschools.org/"
)

School.create(
  name: "Cedar Park Elementary Schooloption",
  address: "13224 37th Ave NE Seattle, WA 98125​",
  phone: "206-252-4300",
  district: ssd,
  homepage_url: "https://cedarparkes.seattleschools.org/"
)

School.create(
  name: "Frantz H. Coe Elementary School",
  address: "2424  7th Ave W Seattle, WA 98119",
  phone: "206-252-2000",
  district: ssd,
  homepage_url: "https://coees.seattleschools.org/"
)

# dummy user
User.create(name:"Chris", email:"c@email.com", permissions:"admin")
