require 'pg'

class SaveState 

  attr_reader :temperature , :city

  def initialize(temperature:, city:)
    @temperature = temperature
    @city = city
  end

  def self.show
    connection = if ENV['DATABASE'] == 'test'
                   PG.connect(dbname: 'thermostat_test')
                 else
                   PG.connect(dbname: 'thermostat')
                 end

    result = connection.exec('SELECT * FROM saved_state;')

    result.map do |bookmark| 
      Bookmarks.new(id: saved_state['id'], temperature: saved_state['temperature'], powerswitch: saved_state['powerswitch']city: saved_state['city'])
    end
    
  end
  def self.add(temperature:, city:)
    connection = if ENV['DATABASE'] == 'test'
                   PG.connect(dbname: 'thermostat_test')
                 else
                   PG.connect(dbname: 'thermostat')
                 end

    result = connection.exec("INSERT INTO bookmarks (temperature,powerswitch,city) VALUES('#{temperature}','#{powerswitch}','#{city}') RETURNING id, url, title;")
    Bookmarks.new(id: result[0]['id'], temperature: result[0]['temperature'],powerswitch: result[0]['powerswitch'] city: result[0]['city'],)
  end


    
  end