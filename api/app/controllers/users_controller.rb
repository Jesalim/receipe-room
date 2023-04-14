class UsersController < ApplicationController

    #POST/ register users

    def create
    user = User.create(user_params)
    if user.valid?
        app_response(message: "Registered successfully", status: :created, data: user)
    else
        app_response(message: "Failed to register", status: :unprocessable_entity, data: user.errors.full_messages)
    end
end

#PUT /users/:id
def update
    user = User.find(params[:id])
    if user.update(user_params)
        app_response(message: "User updated successfully", status: :ok, data: user)
    else
        app_response(message: "Failed to update", status: :unprocessable_entity, data: user.errors.full_messages)
    end
end

#DELETE /users/:id
def destroy
    user = User.find(params[:id])
    user.destroy
    app_response(message: "User deleted successfully", status: :ok, data: user)
end

private
 def user_params
    params.permit(:username, :email, :password, :bio)
 end
end
