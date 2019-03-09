class Thing
  
  def initialize(args)
    args.each {|k,v| self.instance_variable_set "@#{k}", v}
  end
end